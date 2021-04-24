import { IpcEventMessage } from '../ipc-main/ipc-message.type';
import { TouchbarSetEvent, TouchbarPatchEvent } from './touchbar-event.type';

export function isTouchbarSetEvent(u: IpcEventMessage): u is TouchbarSetEvent {
  return 'touchbar' in u;
}

export function isTouchbarUpdateEvent(
  u: IpcEventMessage,
): u is TouchbarPatchEvent {
  return 'items' in u;
}
