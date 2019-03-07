import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormFieldJSON } from '../../../../models';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent {
  @Input() formFieldJSON: FormFieldJSON;
  @Input() control: FormGroup;

  constructor() { }

}
