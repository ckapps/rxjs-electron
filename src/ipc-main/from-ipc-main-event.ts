import { Observable } from 'rxjs';

import { IpcMessage } from './ipc-message.type';

/**
 * Creates an observable from an stream of events from
 * electron renderer interops on a given channel.
 *
 * @param ipcMain Renderer interop
 * @param channel Channel name
 *
 * @returns
 * Observable stream of ipc renderer events
 */
export function fromIpcMainEvent<T>(
  ipcMain: Electron.IpcMain,
  channel: string,
): Observable<IpcMessage<T>> {
  return new Observable((subscriber) => {
    const handler = (event: Electron.IpcMainEvent, args: T) => {
      subscriber.next({ event, args });
    };

    ipcMain.addListener(channel, handler);

    return () => {
      ipcMain.removeListener(channel, handler);
    };
  });
}
