import { ApiOutlined, SendOutlined } from '@ant-design/icons';
import { Input, List, message } from 'antd';
import React from 'react';
import { Client } from '@stomp/stompjs';
import { TOPIC_ROOM, WS_BROKER } from '../../service/Endpoints';

const { Search } = Input;

const client = new Client({
  brokerURL: WS_BROKER,
});

client.onWebSocketError = (event: Event) => {
  message.error('Error');
  console.warn(event);
};

client.onConnect = () => {
  message.success('Connected');
};

client.activate();

const Chat: React.FunctionComponent = () => {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [room, setRoom] = React.useState('');

  const sendMessage = React.useCallback(
    (body: string) => {
      console.warn(body);
      client.publish({
        destination: TOPIC_ROOM(room),
        body: JSON.stringify({ user: 'dev', message: body }),
      });
    },
    [room],
  );

  const connectToRoom = React.useCallback(
    (roomId) => {
      client.subscribe(TOPIC_ROOM(room), (serverMessage) => {
        if (serverMessage.body) {
          const response = JSON.parse(serverMessage.body);
          setMessages((prev) => [...prev, response.message]);
        }
      });
      setRoom(roomId);
    },
    [setRoom, room],
  );

  return (
    <>
      <p>Current Room: {room}</p>
      <Search
        allowClear
        placeholder="Connect to Room"
        enterButton={<ApiOutlined />}
        onSearch={connectToRoom}
      />
      <List
        size="small"
        bordered
        dataSource={messages}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      <Search
        allowClear
        placeholder="Message"
        enterButton={<SendOutlined />}
        onSearch={sendMessage}
      />
    </>
  );
};

export default Chat;
