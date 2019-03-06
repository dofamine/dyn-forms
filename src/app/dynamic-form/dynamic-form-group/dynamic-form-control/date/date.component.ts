import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormFieldJSON } from '../../../../models';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateComponent {
  @Input() model: FormFieldJSON;
  @Input() control: FormControl;

  constructor() { }
}
