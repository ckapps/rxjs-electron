import { app } from 'electron';
import { from } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

import { ElectronLogScope, logFactory } from '../core/log';

const logger = logFactory(ElectronLogScope.App);

/**
 * Emits and completes when electron is initialized.
 */
export const appIsReady$ = from(app.whenReady()).pipe(
  tap(() => logger.verbose('is ready')),
  shareReplay(1),
);
