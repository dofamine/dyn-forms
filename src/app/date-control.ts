import { BaseControl } from './base-control';

export class DateControl extends BaseControl<any> {
  type = 'date';

  constructor(options) {
    super(options);
  }
}
