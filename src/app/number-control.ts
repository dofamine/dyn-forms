import { BaseControl } from './base-control';

export class NumberControl extends BaseControl<any> {
  type = 'number';

  constructor(options = {}) {
    super(options);
  }
}
