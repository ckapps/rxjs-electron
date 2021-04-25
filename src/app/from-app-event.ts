import { app } from 'electron';
import { Observable } from 'rxjs';

import { getAdapter } from './adapter/app-event.adapter';
import { AppEvents, AppEventName } from './app-event-name';
import {
  AccessibilitySupportChangedEvent,
  ActivateAppEvent,
  AppBrowserWindowEvent,
  AppEvent,
  AppEventArg,
  AppSessionEvent,
  AppTypeEvent,
  AppWebContentsEvent,
  GpuProcessCrashedEvent,
  LoginAppEvent,
  OpenUrlEvent,
  QuitAppEvent,
  ReadyEvent,
  RemoteGetGlobalEvent,
  RemoteRequireEvent,
  RendererProcessCrashedEvent,
  RendererProcessGoneEvent,
  SecondInstanceEvent,
  SelectClientCertificateEvent,
  AppActivityEvent,
  AppActivityErrorEvent,
  CertificateErrorEvent,
  OpenFileEvent,
} from './app-event.types';

// ********************************************************
// ********************************************************
// Overloads
// ********************************************************
// ********************************************************
/**
 * Emitted when Chrome's accessibility support changes. This event fires when
 * assistive technologies, such as screen readers, are enabled or disabled. See
 * https://www.chromium.org/developers/design-documents/accessibility for more
 * details.
 *
 * @platform darwin,win32
 */
export function fromAppEvent(
  event:
    | AppEvents.AccessibilitySupportChanged
    | 'accessibility-support-changed',
): Observable<AccessibilitySupportChangedEvent>;

/**
 * Emitted when the application is activated. Various actions can trigger this
 * event, such as launching the application for the first time, attempting to
 * re-launch the application when it's already running, or clicking on the
 * application's dock or taskbar icon.
 *
 * @platform darwin
 */
export function fromAppEvent(
  event: AppEvents.Activate | 'activate',
): Observable<ActivateAppEvent>;

/**
 * Emitted during Handoff after an activity from this device was successfully
 * resumed on another one.
 *
 * @platform darwin
 */
export function fromAppEvent(
  event: AppEvents.ActivityWasContinued | 'activity-was-continued',
): Observable<AppActivityEvent>;

/**
 * Emitted before the application starts closing its windows. Calling
 * `event.preventDefault()` will prevent the default behavior, which is terminating
 * the application.
 *
 * **Note:** If application quit was initiated by `autoUpdater.quitAndInstall()`,
 * then `before-quit` is emitted *after* emitting `close` event on all windows and
 * closing them.
 *
 * **Note:** On Windows, this event will not be emitted if the app is closed due to
 * a shutdown/restart of the system or a user logout.
 */
export function fromAppEvent(
  event: AppEvents.BeforeQuit | 'before-quit',
): Observable<AppEvent>;

/**
 * Emitted when a browserWindow gets blurred.
 */
export function fromAppEvent(
  event: AppEvents.BrowserWindowBlur | 'browser-window-blur',
): Observable<AppBrowserWindowEvent>;

/**
 * Emitted when a new browserWindow is created.
 */
export function fromAppEvent(
  event: AppEvents.BrowserWindowCreated | 'browser-window-created',
): Observable<AppBrowserWindowEvent>;

/**
 * Emitted when a browserWindow gets focused.
 */
export function fromAppEvent(
  event: AppEvents.BrowserWindowFocus | 'browser-window-focus',
): Observable<AppBrowserWindowEvent>;

/**
 * Emitted when failed to verify the `certificate` for `url`, to trust the
 * certificate you should prevent the default behavior with
 * `event.preventDefault()` and call `callback(true)`.
 */
export function fromAppEvent(
  event: AppEvents.CertificateError | 'certificate-error',
): Observable<CertificateErrorEvent>;

/**
 * Emitted during Handoff when an activity from a different device wants to be
 * resumed. You should call `event.preventDefault()` if you want to handle this
 * event.
 *
 * A user activity can be continued only in an app that has the same developer Team
 * ID as the activity's source app and that supports the activity's type. Supported
 * activity types are specified in the app's `Info.plist` under the
 * `NSUserActivityTypes` key.
 *
 * @platform darwin
 */
export function fromAppEvent(
  event: AppEvents.ContinueActivity | 'continue-activity',
): Observable<AppActivityEvent>;

/**
 * Emitted during Handoff when an activity from a different device fails to be
 * resumed.
 *
 * @platform darwin
 */
export function fromAppEvent(
  event: AppEvents.ContinueActivityError | 'continue-activity-error',
): Observable<AppActivityErrorEvent>;

/**
 * Emitted when `desktopCapturer.getSources()` is called in the renderer process of
 * `webContents`. Calling `event.preventDefault()` will make it return empty
 * sources.
 */
export function fromAppEvent(
  event: AppEvents.DesktopCapturerGetSources | 'desktop-capturer-get-sources',
): Observable<AppWebContentsEvent>;

/**
 * Emitted whenever there is a GPU info update.
 */
export function fromAppEvent(
  event: AppEvents.GpuInfoUpdate | 'gpu-info-update',
): Observable<void>;

/**
 * Emitted when the GPU process crashes or is killed.
 */
export function fromAppEvent(
  event: AppEvents.GpuProcessCrashed | 'gpu-process-crashed',
): Observable<GpuProcessCrashedEvent>;

/**
 * Emitted when `webContents` wants to do basic auth.
 *
 * The default behavior is to cancel all authentications. To override this you
 * should prevent the default behavior with `event.preventDefault()` and call
 * `callback(username, password)` with the credentials.
 *
 * If `callback` is called without a username or password, the authentication
 * request will be cancelled and the authentication error will be returned to the
 * page.
 */
export function fromAppEvent(
  event: AppEvents.Login | 'login',
): Observable<LoginAppEvent>;

/**
 * Emitted when the user clicks the native macOS new tab button. The new tab button
 * is only visible if the current `BrowserWindow` has a `tabbingIdentifier`
 *
 * @platform darwin
 */
export function fromAppEvent(
  event: AppEvents.NewWindowForTab | 'new-window-for-tab',
): Observable<AppEvent>;

/**
 * Emitted when the user wants to open a file with the application. The `open-file`
 * event is usually emitted when the application is already open and the OS wants
 * to reuse the application to open the file. `open-file` is also emitted when a
 * file is dropped onto the dock and the application is not yet running. Make sure
 * to listen for the `open-file` event very early in your application startup to
 * handle this case (even before the `ready` event is emitted).
 *
 * You should call `event.preventDefault()` if you want to handle this event.
 *
 * On Windows, you have to parse `process.argv` (in the main process) to get the
 * filepath.
 *
 * @platform darwin
 */
export function fromAppEvent(
  event: AppEvents.OpenFile | 'open-file',
): Observable<OpenFileEvent>;

/**
 * Emitted when the user wants to open a URL with the application. Your
 * application's `Info.plist` file must define the URL scheme within the
 * `CFBundleURLTypes` key, and set `NSPrincipalClass` to `AtomApplication`.
 * You should call `event.preventDefault()` if you want to handle this event.
 *
 * @platform darwin
 */
export function fromAppEvent(
  event: AppEvents.OpenUrl | 'open-url',
): Observable<OpenUrlEvent>;

/**
 * Emitted when the application is quitting.
 *
 * **Note:** On Windows, this event will not be emitted if the app is closed due to
 * a shutdown/restart of the system or a user logout.
 */
export function fromAppEvent(
  event: AppEvents.Quit | 'quit',
): Observable<QuitAppEvent>;

/**
 * Emitted once, when Electron has finished initializing. On macOS, `launchInfo`
 * holds the `userInfo` of the `NSUserNotification` that was used to open the
 * application, if it was launched from Notification Center. You can also call
 * `app.isReady()` to check if this event has already fired and `app.whenReady()`
 * to get a Promise that is fulfilled when Electron is initialized.
 */
export function fromAppEvent(
  event: AppEvents.Ready | 'ready',
): Observable<ReadyEvent>;

/**
 * Emitted when `remote.getBuiltin()` is called in the renderer process of
 * `webContents`. Calling `event.preventDefault()` will prevent the module from
 * being returned. Custom value can be returned by setting `event.returnValue`.
 */
export function fromAppEvent(
  event: AppEvents.RemoteGetBuiltin | 'remote-get-builtin',
): Observable<RemoteRequireEvent>;

/**
 * Emitted when `remote.getCurrentWebContents()` is called in the renderer process
 * of `webContents`. Calling `event.preventDefault()` will prevent the object from
 * being returned. Custom value can be returned by setting `event.returnValue`.
 */
export function fromAppEvent(
  event:
    | AppEvents.RemoteGetCurrentWebContents
    | 'remote-get-current-web-contents',
): Observable<AppWebContentsEvent>;

/**
 * Emitted when `remote.getCurrentWindow()` is called in the renderer process of
 * `webContents`. Calling `event.preventDefault()` will prevent the object from
 * being returned. Custom value can be returned by setting `event.returnValue`.
 */
export function fromAppEvent(
  event: AppEvents.RemoteGetCurrentWindow | 'remote-get-current-window',
): Observable<AppWebContentsEvent>;

/**
 * Emitted when `remote.getGlobal()` is called in the renderer process of
 * `webContents`. Calling `event.preventDefault()` will prevent the global from
 * being returned. Custom value can be returned by setting `event.returnValue`.
 */
export function fromAppEvent(
  event: AppEvents.RemoteGetGlobal | 'remote-get-global',
): Observable<RemoteGetGlobalEvent>;

/**
 * Emitted when `remote.require()` is called in the renderer process of
 * `webContents`. Calling `event.preventDefault()` will prevent the module from
 * being returned. Custom value can be returned by setting `event.returnValue`.
 */
export function fromAppEvent(
  event: AppEvents.RemoteRequire | 'remote-require',
): Observable<RemoteRequireEvent>;

/**
 * Emitted when the renderer process unexpectedly dissapears.  This is normally
 * because it was crashed or killed.
 */
export function fromAppEvent(
  event: AppEvents.RenderProcessCrashed | 'renderer-process-crashed',
): Observable<RendererProcessCrashedEvent>;

/**
 * Emitted when the renderer process unexpectedly dissapears.  This is normally
 * because it was crashed or killed.
 */
export function fromAppEvent(
  event: AppEvents.RenderProcessGone | 'render-process-gone',
): Observable<RendererProcessGoneEvent>;

/**
 * This event will be emitted inside the primary instance of your application when
 * a second instance has been executed and calls `app.requestSingleInstanceLock()`.
 *
 * `argv` is an Array of the second instance's command line arguments, and
 * `workingDirectory` is its current working directory. Usually applications
 * respond to this by making their primary window focused and non-minimized.
 *
 * **Note:** If the second instance is started by a different user than the first,
 * the `argv` array will not include the arguments.
 *
 * This event is guaranteed to be emitted after the `ready` event of `app` gets
 * emitted.
 *
 * **Note:** Extra command line arguments might be added by Chromium, such as
 * `--original-process-start-time`.
 */
export function fromAppEvent(
  event: AppEvents.SecondInstance | 'second-instance',
): Observable<SecondInstanceEvent>;

/**
 * Emitted when a client certificate is requested.
 *
 * The `url` corresponds to the navigation entry requesting the client certificate
 * and `callback` can be called with an entry filtered from the list. Using
 * `event.preventDefault()` prevents the application from using the first
 * certificate from the store.
 */
export function fromAppEvent(
  event: AppEvents.SelectClientCertificate | 'select-client-certificate',
): Observable<SelectClientCertificateEvent>;

/**
 * Emitted when Electron has created a new `session`.
 */
export function fromAppEvent(
  event: AppEvents.SessionCreated | 'session-created',
): Observable<AppSessionEvent>;

/**
 * Emitted when Handoff is about to be resumed on another device. If you need to
 * update the state to be transferred, you should call `event.preventDefault()`
 * immediately, construct a new `userInfo` dictionary and call
 * `app.updateCurrentActivity()` in a timely manner. Otherwise, the operation will
 * fail and `continue-activity-error` will be called.
 *
 * @platform darwin
 */
export function fromAppEvent(
  event: AppEvents.UpdateActivityState | 'update-activity-state',
): Observable<AppActivityEvent>;

/**
 * Emitted when a new webContents is created.
 */
export function fromAppEvent(
  event: AppEvents.WebContentsCreated | 'web-contents-created',
): Observable<AppWebContentsEvent>;

/**
 * Emitted during Handoff before an activity from a different device wants to be
 * resumed. You should call `event.preventDefault()` if you want to handle this
 * event.
 *
 * @platform darwin
 */
export function fromAppEvent(
  event: AppEvents.WillContinueActivity | 'will-continue-activity',
): Observable<AppTypeEvent>;

/**
 * Emitted when the application has finished basic startup. On Windows and Linux,
 * the `will-finish-launching` event is the same as the `ready` event; on macOS,
 * this event represents the `applicationWillFinishLaunching` notification of
 * `NSApplication`. You would usually set up listeners for the `open-file` and
 * `open-url` events here, and start the crash reporter and auto updater.
 * In most cases, you should do everything in the `ready` event handler.
 */
export function fromAppEvent(
  event: AppEvents.WillFinishLaunching | 'will-finish-launching',
): Observable<void>;

/**
 * Emitted when all windows have been closed and the application will quit. Calling
 * `event.preventDefault()` will prevent the default behavior, which is terminating
 * the application.
 *
 * See the description of the `window-all-closed` event for the differences between
 * the `will-quit` and `window-all-closed` events.
 *
 * **Note:** On Windows, this event will not be emitted if the app is closed due to
 * a shutdown/restart of the system or a user logout.
 */
export function fromAppEvent(
  event: AppEvents.WillQuit | 'will-quit',
): Observable<AppEvent>;

/**
 * Emitted when all windows have been closed.
 *
 * If you do not subscribe to this event and all windows are closed, the default
 * behavior is to quit the app; however, if you subscribe, you control whether the
 * app quits or not. If the user pressed `Cmd + Q`, or the developer called
 * `app.quit()`, Electron will first try to close all the windows and then emit the
 * `will-quit` event, and in this case the `window-all-closed` event would not be
 * emitted.
 */
export function fromAppEvent(
  event: AppEvents.WindowAllClosed | 'window-all-closed',
): Observable<void>;

// ********************************************************
// ********************************************************
// Implementation
// ********************************************************
// ********************************************************

/**
 * Creates an observable stream for the given app `event`.
 *
 * @param event The event to observ
 *
 * @returns
 * Observable stream of the given event
 */
export function fromAppEvent(
  event: AppEventName | AppEvents,
): Observable<AppEventArg> {
  const converter = getAdapter(event);
  return new Observable<AppEventArg>((subscriber) => {
    const handler = (...args: unknown[]) => {
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
