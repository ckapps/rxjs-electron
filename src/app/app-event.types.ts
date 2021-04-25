import {
  AuthenticationResponseDetails,
  AuthInfo,
  BrowserWindow,
  Certificate,
  Details,
  Event,
  WebContents,
  Session,
} from 'electron';

// Base Events
export interface AppSessionEvent {
  session: Session;
}

export interface AppEvent {
  event: Event;
}

export interface AppBrowserWindowEvent extends AppEvent {
  window: BrowserWindow;
}

export interface AppTypeEvent extends AppEvent {
  type: string;
}

export interface AppActivityEvent extends AppTypeEvent {
  userInfo: unknown;
}
export interface AppActivityErrorEvent extends AppTypeEvent {
  error: string;
}

export interface AppWebContentsEvent extends AppEvent {
  webContents: WebContents;
}
// Unique types

/**
 * Interface for event `'accessibility-support-changed'`
 */
export interface AccessibilitySupportChangedEvent extends AppEvent {
  accessibilitySupportEnabled: boolean;
}

/**
 * Interface for event `'activate'`
 */
export interface ActivateAppEvent extends AppEvent {
  hasVisibleWindows: boolean;
}

/**
 * Interface for event `'certificate-error'`
 */
export interface CertificateErrorEvent extends AppWebContentsEvent {
  url: string;
  /**
   * The error code
   */
  error: string;
  certificate: Certificate;
  callback: (isTrusted: boolean) => void;
}

/**
 * Interface for event `'gpu-process-crashed'`
 */
export interface GpuProcessCrashedEvent extends AppEvent {
  killed: boolean;
}

/**
 * Interface for event `'login'`
 */
export interface LoginAppEvent extends AppWebContentsEvent {
  authenticationResponseDetails: AuthenticationResponseDetails;
  authInfo: AuthInfo;
  callback: (username?: string, password?: string) => void;
}

/**
 * Interface for event `'open-file'`
 */
export interface OpenFileEvent extends AppEvent {
  path: string;
}

/**
 * Interface for event `'open-url'`
 */
export interface OpenUrlEvent extends AppEvent {
  url: string;
}

/**
 * Interface for event `'quit'`
 */

export interface QuitAppEvent extends AppEvent {
  exitCode: number;
}

/**
 * Interface for event `'ready'`
 */
export interface ReadyEvent extends AppEvent {
  launchInfo: Record<string, any>;
}

export interface RendererProcessCrashedEvent extends AppWebContentsEvent {
  killed: boolean;
}

export interface RendererProcessGoneEvent extends AppWebContentsEvent {
  details: Details;
}

export interface RemoteRequireEvent extends AppWebContentsEvent {
  moduleName: string;
}

export interface RemoteGetGlobalEvent extends AppWebContentsEvent {
  globalName: string;
}

/**
 * Interface for event `'second-instance'`
 */
export interface SecondInstanceEvent extends AppEvent {
  argv: string[6];
  workingDirectory: string;
}

/**
 * Interface for event `'selection-certificate-error'`
 */
export interface SelectClientCertificateEvent extends AppWebContentsEvent {
  url: string;
  certificateList: Certificate[];
  callback: (certificate?: Certificate) => void;
}

//
export type AppEventArg = void | AppEvent | AppSessionEvent;
