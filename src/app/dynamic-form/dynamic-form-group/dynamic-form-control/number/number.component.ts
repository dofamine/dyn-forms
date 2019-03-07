import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormFieldJSON } from '../../../../models';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent {
  @Input() formFieldJSON: FormFieldJSON;
  @Input() control: FormControl;

  constructor() { }
}
