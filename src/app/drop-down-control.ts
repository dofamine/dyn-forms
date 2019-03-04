import { BaseControl } from './base-control';

export class DropDownControl extends BaseControl<any> {
  type = 'select';
  options: { key: string, value: string | number }[];


  constructor(options) {
    super(options);
    this.options = options.options || [];
  }
}
