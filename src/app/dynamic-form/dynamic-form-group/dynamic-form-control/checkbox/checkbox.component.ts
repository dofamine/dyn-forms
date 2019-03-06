import { FormGroup } from '@angular/forms';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FormFieldJSON } from '../../../../models';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() model: FormFieldJSON;
  @Input() control: FormGroup;

  constructor() { }

  getControl(name: string | number) {
    return this.control.controls[name];
  }
}
