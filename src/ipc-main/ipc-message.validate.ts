import { OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

import { IpcMessage, IpcEventMessage } from './ipc-message.type';
import { isIpcMessage, isIpcEventMessage } from './ipc-message.guard';

export function validateIpcMessage(): OperatorFunction<
  unknown,
  IpcMessage<unknown>
> {
  return filter(isIpcMessage);
}

export function validateIpcEventMessage(): OperatorFunction<
  unknown,
  IpcEventMessage
> {
  return filter(isIpcEventMessage);
}
