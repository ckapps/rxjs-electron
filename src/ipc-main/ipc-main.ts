import { ipcMain as _ipcMain } from 'electron';
import { Observable } from 'rxjs';
import { share, tap } from 'rxjs/operators';

import { ElectronLogScope, logFactory } from '../core/log';
import { fromIpcMainEvent } from './from-ipc-main-event';
import { IpcMessage } from './ipc-message.type';

const logger = logFactory(ElectronLogScope.IpcMain);

class RxIpcMain {
  private channels$: Record<string, Observable<IpcMessage<unknown>>> = {};
  private readonly _ipcMain = _ipcMain;

  public get channels() {
    return Object.keys(this.channels$);
  }

  /**
   * Get a new channel
   * @param channel
   *
   * @returns
   */
  public channel$<T>(channel: string) {
    if (channel in this.channels$) {
      return this.channels$[channel];
    }

    const channel$ = fromIpcMainEvent<T>(this._ipcMain, channel).pipe(
      tap((msg) => logger.debug(`msg on [${channel}] -> `, msg.args)),
      share(),
    );

    this.channels$[channel] = channel$;
    return channel$;
  }
}

export const rxIpcMain = new RxIpcMain();
