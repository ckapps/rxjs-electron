import { TouchBar, TouchBarButton } from 'electron';
import { Adapter } from './adapter';

export { TouchBarButton };

export interface RxTouchbarButtonOptions {
  accessibilityLabel: string;
  backgroundColor: string;
  enabled: boolean;
  icon: string;
  label: string;
}

export class TouchbarButtonAdapter
  implements Adapter<TouchBarButton, RxTouchbarButtonOptions>
{
  adapt(options: RxTouchbarButtonOptions): TouchBarButton {
    const {
      accessibilityLabel,
      backgroundColor,
      enabled,
      // icon,
      label,
    } = options;

    return new TouchBar.TouchBarButton({
      accessibilityLabel,
      backgroundColor,
      enabled,
      icon: undefined,
      label,
    });
  }
}
