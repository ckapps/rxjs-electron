import { getAdapter } from './app-event.adapter';
import { AppEventName, AppEvents } from '../app-event-name';

describe('app/adapter/app-event', () => {
  type AdaterTestCase = [AppEvents.AccessibilitySupportChanged, string[]];

  it('should have an adapter for every event', () => {
    for (const x in AppEvents) {
      expect(getAdapter(x as AppEventName)).toBeDefined();
    }
  });

  test.each([
    [AppEvents.AccessibilitySupportChanged, []],
    [AppEvents.Activate, []],
    [AppEvents.ActivityWasContinued, []],
    [AppEvents.BeforeQuit, []],
    [AppEvents.BrowserWindowBlur, []],
    [AppEvents.BrowserWindowCreated, []],
    [AppEvents.BrowserWindowFocus, []],
    [AppEvents.CertificateError, []],
    [AppEvents.ContinueActivity, []],
    [AppEvents.ContinueActivityError, []],
    [AppEvents.DesktopCapturerGetSources, []],
    [AppEvents.GpuInfoUpdate, []],
    [AppEvents.GpuProcessCrashed, []],
    [AppEvents.Login, []],
    [AppEvents.NewWindowForTab, []],
    [AppEvents.OpenFile, []],
    [AppEvents.OpenUrl, []],
    [AppEvents.Quit, []],
    [AppEvents.Ready, []],
    [AppEvents.RemoteGetBuiltin, []],
    [AppEvents.RemoteGetCurrentWebContents, []],
    [AppEvents.RemoteGetCurrentWindow, []],
    [AppEvents.RemoteGetGlobal, []],
    [AppEvents.RemoteRequire, []],
    [AppEvents.RenderProcessCrashed, []],
    [AppEvents.RenderProcessGone, []],
    [AppEvents.SecondInstance, []],
    [AppEvents.SelectClientCertificate, []],
    [AppEvents.SessionCreated, []],
    [AppEvents.UpdateActivityState, []],
    [AppEvents.WebContentsCreated, []],
    [AppEvents.WillContinueActivity, []],
    [AppEvents.WillFinishLaunching, []],
    [AppEvents.WillQuit, []],
    [AppEvents.WindowAllClosed, []],
  ] as AdaterTestCase[])('should adapt for %p to %p', (event: AppEvents) => {
    const adapter = getAdapter(event);

    expect(adapter).toBeDefined();
  });
});
