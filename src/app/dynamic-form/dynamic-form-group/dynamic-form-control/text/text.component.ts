import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Models } from '../../../../models';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  @Input() model: Models;
  @Input() control: FormControl;

  constructor() {
  }
}
