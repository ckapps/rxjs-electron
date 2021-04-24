import { IpcMessage, IpcEventMessage } from './ipc-message.type';

export function isIpcMessage(u: unknown): u is IpcMessage<unknown> {
  return typeof u === 'object' && u !== null && 'args' in u && 'event' in u;
}

export function isIpcEventMessage(u: unknown): u is IpcEventMessage {
  return typeof u === 'object' && u !== null && 'action' in u;
}
