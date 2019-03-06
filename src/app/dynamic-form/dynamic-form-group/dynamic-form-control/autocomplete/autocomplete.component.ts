import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Models, Option } from '../../../../models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent {
  @Input() model: Models;
  @Input() control: FormControl;

  constructor() {
  }

  get title(): string {
    return this.model.title;
  }

  get options(): Option[] {
    return this.model.options;
  }
}
