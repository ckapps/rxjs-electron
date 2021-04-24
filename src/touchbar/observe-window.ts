import { TouchBar } from 'electron';
import { merge, Observable, of } from 'rxjs';
import {
  filter,
  mapTo,
  pluck,
  share,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';

import {
  rxIpcMain,
  validateIpcMessage,
  validateIpcEventMessage,
  matchAction,
} from '../ipc-main';

import {
  adaptTouchbarItem,
  RxTouchbarItem,
} from './adapter/touchbar-item-adapter';
import {
  isTouchbarSetEvent,
  isTouchbarUpdateEvent,
} from './touchbar-event.guard';

const CHANNEL = 'os.touchbar';

function createTouchbarItems(items: RxTouchbarItem[]) {
  return new Map(items.map((v) => [v.name, adaptTouchbarItem(v)]));
}

export function touchbar$(
  win: Electron.BrowserWindow,
  stream = rxIpcMain.channel$(CHANNEL),
): Observable<TouchBar | null> {
  const source = stream.pipe(
    validateIpcMessage(),
    pluck('args'),
    validateIpcEventMessage(),
    share(),
  );

  const set$ = source.pipe(
    matchAction('set'),
    filter(isTouchbarSetEvent),
    pluck('items'),
  );
  const clear$ = source.pipe(matchAction('clear'), mapTo(null));

  const update$ = source.pipe(
    matchAction('update'),
    filter(isTouchbarUpdateEvent),
    pluck('items'),
  );

  // -> set -> return new Touchbar()
  // -> clear -> return null
  // -> switchMap with set -> update items

  return merge(clear$, set$).pipe(
    switchMap((eventItems) => {
      if (eventItems === null) {
        win.setTouchBar(null);
        return of(null);
      }

      const itemMap = createTouchbarItems(eventItems);
      const items = [...itemMap.values()];
      const touchbar = new TouchBar({ items });

      win.setTouchBar(touchbar);

      return update$.pipe(
        tap((updates) => {
          Object.entries(updates).forEach(([key]) => {
            const item = itemMap.get(key);
            if (item) {
              // TODO: update item
              // value.options.
            }
          });
        }),
        mapTo(touchbar),
        startWith(touchbar),
      );
    }),
    share(),
  );
}
