import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { FormModel } from '../../models';

@Component({
  selector: 'app-dynamic-form-group',
  templateUrl: './dynamic-form-group.component.html',
  styleUrls: ['./dynamic-form-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormGroupComponent {
  @Input() group: FormGroup;
  @Input() groupModel: FormModel;

  constructor() {
  }

  get controlKeys(): string[] {
    return Object.keys(this.group.controls);
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.group.controls;
  }
}
