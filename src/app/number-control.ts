import { BaseControl } from './base-control';

export class NumberControl extends BaseControl {
  type = 'number';

  constructor(options = {}) {
    super(options);
  }
}
