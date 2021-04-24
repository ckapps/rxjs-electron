import { BrowserWindow, Event, WebContents } from 'electron';

export interface AppEvent {
  event: Event;
}

export interface AppBrowserWindowEvent extends AppEvent {
  window: BrowserWindow;
}

export interface AppTypeEvent extends AppEvent {
  type: string;
}

export interface AppWebContentsEvent extends AppEvent {
  webContents: WebContents;
}
