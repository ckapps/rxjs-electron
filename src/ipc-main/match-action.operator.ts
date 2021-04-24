import { OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

import { IpcEventMessage } from './ipc-message.type';

export function matchAction<T extends IpcEventMessage>(
  action: T['action'],
): OperatorFunction<IpcEventMessage, IpcEventMessage> {
  return (obs$) => obs$.pipe(filter((ev) => ev.action === action));
}
