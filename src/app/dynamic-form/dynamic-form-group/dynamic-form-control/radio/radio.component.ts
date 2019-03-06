import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Models } from '../../../../models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent {
  @Input() model: Models;
  @Input() control: FormGroup;

  constructor() { }

  getControl(name) {
    return this.control.controls[name];
  }
}
