import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormFieldJSON } from '../../../../models';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  @Input() formFieldJSON: FormFieldJSON;
  @Input() control: FormControl;

  constructor() {
  }
}
