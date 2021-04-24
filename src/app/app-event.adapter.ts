export const noopEventHandler = () => {
  void 0;
};

export const eventHandler = (event: Electron.Event) => ({
  event,
});

export const browserWindowEventHandler = (
  event: Electron.Event,
  browserWindow: Electron.BrowserWindow,
) => ({
  event,
  browserWindow,
});

export const webContentsEventHandler = (
  event: Electron.Event,
  webContents: Electron.WebContents,
) => ({
  event,
  webContents,
});

export const typeEventHandler = (event: Electron.Event, type: string) => ({
  event,
  type,
});
