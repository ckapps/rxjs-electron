import { IpcEventMessage } from '../ipc-main/ipc-message.type';
import { RxTouchbarItem } from './adapter/touchbar-item-adapter';

export interface TouchbarClearEvent extends IpcEventMessage {
  action: 'clear';
}

export interface TouchbarSetEvent extends IpcEventMessage {
  action: 'set';
  items: RxTouchbarItem[];
}

export interface TouchbarPatchEvent extends IpcEventMessage {
  action: 'patch';
  items: Record<string, Partial<RxTouchbarItem>>;
}

export type TouchbarEvent =
  | TouchbarClearEvent
  | TouchbarSetEvent
  | TouchbarPatchEvent;
