import { BaseControl } from './base-control';

export class RadioControl extends BaseControl<any> {
  type = 'radio';

  constructor(options) {
    super(options);
  }
}
