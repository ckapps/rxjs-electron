export interface IpcEventMessage {
  action: string;
}

export interface IpcMessage<T> {
  event: Electron.IpcMainEvent;
  args: T;
}
