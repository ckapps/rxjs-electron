import { AppEventName, AppEvents } from '../app-event-name';
import { AppEventArg } from '../app-event.types';

type Handler<T extends AppEventArg> = (...args: any[]) => T;

const noopEventHandler: Handler<void> = () => {
  void 0;
};

function createConverter(...mappedNames: string[]): Handler<AppEventArg> {
  return (...args: unknown[]): AppEventArg =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mappedNames.reduce(
      (acc, cur, i) => ({ ...acc, [cur]: args[i] }),
      {} as Record<string, unknown>,
    );
}

const eventHandler = createConverter('event');
const typeEventHandler = createConverter('event', 'type');
const activityHandler = createConverter('event', 'type', 'userInfo');
const activityErrorHandler = createConverter('event', 'type', 'error');
const browserWindowEventHandler = createConverter('event', 'browserWindow');
const webContentsEventHandler = createConverter('event', 'webContents');

export function getAdapter(
  event: AppEventName | AppEvents,
): Handler<AppEventArg> {
  switch (event) {
    // Activity types
    case AppEvents.ActivityWasContinued:
    case AppEvents.ContinueActivity:
    case AppEvents.UpdateActivityState:
      return activityHandler;
    case AppEvents.ContinueActivityError:
      return activityErrorHandler;
    case AppEvents.WillContinueActivity:
      return typeEventHandler;

    // App event handlers
    case AppEvents.BeforeQuit:
    case AppEvents.NewWindowForTab:
    case AppEvents.WillQuit:
      return eventHandler;

    // Browser window types
    case AppEvents.BrowserWindowBlur:
    case AppEvents.BrowserWindowCreated:
    case AppEvents.BrowserWindowFocus:
      return browserWindowEventHandler;

    // Web contents types
    case AppEvents.DesktopCapturerGetSources:
    case AppEvents.RemoteGetCurrentWebContents:
    case AppEvents.RemoteGetCurrentWindow:
    case AppEvents.WebContentsCreated:
      return webContentsEventHandler;

    // remote require types
    case AppEvents.RemoteGetBuiltin:
    case AppEvents.RemoteRequire:
      return createConverter('event', 'moduleName');

    // Unique types
    case AppEvents.AccessibilitySupportChanged:
      return createConverter('event', 'accessibilitySupportEnabled');
    case AppEvents.Activate:
      return createConverter('event', 'hasVisibleWindows');
    case AppEvents.CertificateError:
      return createConverter(
        'event',
        'webContents',
        'url',
        'error',
        'certificate',
        'callback',
      );
    case AppEvents.GpuProcessCrashed:
      return createConverter('event', 'killed');
    case AppEvents.Login:
      return createConverter(
        'event',
        'webContents',
        'authenticationResponseDetails',
        'authInfo',
        'callback',
      );
    case AppEvents.OpenFile:
      return createConverter('event', 'path');
    case AppEvents.OpenUrl:
      return createConverter('event', 'url');
    case AppEvents.Quit:
      return createConverter('event', 'exitCode');
    case AppEvents.Ready:
      return createConverter('event', 'launchInfo');
    case AppEvents.RemoteGetGlobal:
      return createConverter('event', 'globalName');
    case AppEvents.RenderProcessCrashed:
      return createConverter('event', 'webContents', 'killed');
    case AppEvents.RenderProcessGone:
      return createConverter('event', 'webContents', 'details');
    case AppEvents.SecondInstance:
      return createConverter('event', 'argv', 'workingDirectory');
    case AppEvents.SelectClientCertificate:
      return createConverter(
        'event',
        'webContents',
        'url',
        'certificateList',
        'callback',
      );
    case AppEvents.SessionCreated:
      return createConverter('session');

    // No-op handlers
    case AppEvents.GpuInfoUpdate:
    case AppEvents.WillFinishLaunching:
    case AppEvents.WindowAllClosed:
      return noopEventHandler;

    default:
      return noopEventHandler;
  }
}
