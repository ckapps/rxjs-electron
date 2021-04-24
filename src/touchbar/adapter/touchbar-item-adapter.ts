import { Adapter } from './adapter';
import {
  RxTouchbarButtonOptions,
  TouchBarButton,
  TouchbarButtonAdapter,
} from './touchbar-button.adapter';
import {
  RxTouchbarSpacerOptions,
  TouchBarSpacer,
  TouchbarSpacerAdapter,
} from './touchbar-spacer.adapter';

type TouchbarItem =
  | TouchBarButton
  // | TouchBarColorPicker
  // | TouchBarGroup
  // | TouchBarLabel
  // | TouchBarPopover
  // | TouchBarScrubber
  // | TouchBarSegmentedControl
  // | TouchBarSlider
  | TouchBarSpacer;

interface _TouchbarItem<T, R> {
  name: string;
  component: T;
  options: R;
}

export type RxTouchbarItem =
  | _TouchbarItem<'button', RxTouchbarButtonOptions>
  | _TouchbarItem<'spacer', RxTouchbarSpacerOptions>;

class TouchbarItemAdapter implements Adapter<TouchbarItem, RxTouchbarItem> {
  private buttonAdapter = new TouchbarButtonAdapter();
  private spacerAdapter = new TouchbarSpacerAdapter();

  adapt(options: RxTouchbarItem): TouchbarItem {
    switch (options.component) {
      case 'button':
        return this.buttonAdapter.adapt(options.options);
      case 'spacer':
        return this.spacerAdapter.adapt(options.options);
      default:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        throw new Error(`Unknown Touchbar component: ${options.component}`);
    }
  }
}

const adapter = new TouchbarItemAdapter();
export function adaptTouchbarItem(options: RxTouchbarItem): TouchbarItem {
  return adapter.adapt(options);
}
