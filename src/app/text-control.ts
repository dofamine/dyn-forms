import { BaseControl } from './base-control';

export class TextControl extends BaseControl<string> {
  type: 'text';

  constructor(options = {}) {
    super(options);
  }
}
