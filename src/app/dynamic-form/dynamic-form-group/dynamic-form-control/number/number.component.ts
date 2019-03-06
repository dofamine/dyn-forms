import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Models } from '../../../../models';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent {
  @Input() model: Models;
  @Input() control: FormControl;

  constructor() { }
}
