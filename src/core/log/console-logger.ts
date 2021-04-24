/* eslint-disable no-console */
import { Logger, LogLevel } from '@ckapp/rxjs-snafu/lib/cjs/log';

export function consoleLogger(): Logger {
  return {
    [LogLevel.Debug]: (...args) => console.debug(...args),
    [LogLevel.Error]: (...args) => console.error(...args),
    [LogLevel.Info]: (...args) => console.info(...args),
    log: (...args) => console.log(...args),
    [LogLevel.Silly]: (...args) => console.log(...args),
    [LogLevel.Verbose]: (...args) => console.log(...args),
    [LogLevel.Warning]: (...args) => console.warn(...args),
  };
}
