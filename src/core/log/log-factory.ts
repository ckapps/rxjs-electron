import { Logger, prefixLogSuffix } from '@ckapp/rxjs-snafu/lib/cjs/log';
import { consoleLogger } from './console-logger';

type LogFactory = (scope: string) => Logger;

let factory: LogFactory = (scope) => {
  return prefixLogSuffix(consoleLogger(), [scope]);
};

export function setFactory(f: LogFactory): void {
  factory = f;
}

export function logFactory(scope: string): Logger {
  return factory(scope);
}
