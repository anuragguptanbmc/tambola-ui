const TBS_HOSTNAME = '192.168.43.168:8080';
const TBS_BASE_URI = `http://${TBS_HOSTNAME}/v1/api/tambola`;

export const WS_BROKER = `ws://${TBS_HOSTNAME}/socket-server`;

export const TOPIC_ROOM = (roomId: string): string => `/topic/room/${roomId}`;
export const APP_ROOM = (roomId: string): string => `/app/room/${roomId}`;

export const CREATE_ROOM = `${TBS_BASE_URI}/room`;
export const GET_ROOM = (roomId: string): string => `${TBS_BASE_URI}/room/${roomId}`;
