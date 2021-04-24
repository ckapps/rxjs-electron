import { app } from 'electron';
import { Observable } from 'rxjs';

import {
  eventHandler,
  browserWindowEventHandler,
  noopEventHandler,
  typeEventHandler,
  webContentsEventHandler,
} from './app-event.adapter';
import {
  AppBrowserWindowEvent,
  AppEvent,
  AppTypeEvent,
  AppWebContentsEvent,
} from './app-event.types';

// App events

export function fromAppEvent(event: 'before-quit'): Observable<AppEvent>;
export function fromAppEvent(event: 'will-quit'): Observable<AppEvent>;

// With browserwindow
export function fromAppEvent(
  event: 'browser-window-blur',
): Observable<AppBrowserWindowEvent>;
export function fromAppEvent(
  event: 'browser-window-created',
): Observable<AppBrowserWindowEvent>;
export function fromAppEvent(
  event: 'browser-window-focus',
): Observable<AppBrowserWindowEvent>;

// WebContents Events
export function fromAppEvent(
  event: 'web-contents-created',
): Observable<AppWebContentsEvent>;

// Type Events
export function fromAppEvent(
  event: 'will-continue-activity',
): Observable<AppTypeEvent>;

// Noop Events
export function fromAppEvent(event: 'will-finish-launching'): Observable<void>;
export function fromAppEvent(event: 'window-all-closed'): Observable<void>;

/**
 * Creates
 * @param event
 * @returns
 */
export function fromAppEvent(event: string): Observable<unknown> {
  return new Observable<AppEvent>((subscriber) => {
    const converter = getMapFn(event);
    const handler = (...args: unknown[]) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      subscriber.next(converter(...args));
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    app.on(event, handler);

    return () => {
      app.off(event, handler);
    };
  });
}

function getMapFn(event: string) {
  switch (event) {
    case 'before-quit':
    case 'will-quit':
      return eventHandler;

    case 'browser-window-blur':
    case 'browser-window-created':
    case 'browser-window-focus':
      return browserWindowEventHandler;

    case 'web-contents-created':
      return webContentsEventHandler;

    case 'will-continue-activity':
      return typeEventHandler;

    //   case 'browser-window-blur':
    case 'will-finish-launching':
    case 'window-all-closed':
      return noopEventHandler;

    default:
      return noopEventHandler;
  }
}
