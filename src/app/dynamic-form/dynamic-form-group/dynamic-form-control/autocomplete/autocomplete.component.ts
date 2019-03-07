import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FormFieldJSON, Option } from '../../../../models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent {
  @Input() formFieldJSON: FormFieldJSON;
  @Input() control: FormControl;

  constructor() {
  }

  get title(): string {
    return this.formFieldJSON.title;
  }

  get options(): Option[] {
    return this.formFieldJSON.options;
  }
}
