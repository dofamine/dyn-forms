import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Models, FormModel, Option } from '../models';
import { FieldTypes } from '../app-config';


@Injectable()
export class FormService {

  private static sortControls(groups: FormModel) {
    for (const key in groups) {
      if (groups.hasOwnProperty(key)) {
        groups[key].sort(({ seqNo: a }, { seqNo: b }) => a - b);
      }
    }
  }

  getForm(controls: Models[]): FormGroup {
    const groups: any = this.getFormAsObjectModel(controls);

    for (const key in groups) {
      if (groups.hasOwnProperty(key)) {
        groups[key] = this.toFormGroup(groups[key]);
      }
    }

    return new FormGroup(groups);
  }

  getFormAsObjectModel(controls: Models[]): FormModel {
    const groups: any = {};

    controls.forEach((control) => {
      if (!groups[control.groupName]) {
        groups[control.groupName] = [];
      }
      groups[control.groupName].push(control);
    });
    FormService.sortControls(groups);

    return groups;
  }

  toFormGroup(controls: Models[]): FormGroup {
    const group: any = {};

    controls.forEach(control => {
      if (control.type === FieldTypes.radio || control.type === FieldTypes.checkbox) {
        group[control.id] = this.optionsToGroup(control.options);
      } else {
        group[control.id] = new FormControl(control.value || '');
      }
    });

    return new FormGroup(group);
  }

  optionsToGroup(options: Option[]) {
    const group: any = {};

    options.forEach(option => group[option.value] = new FormControl(option.value));

    return new FormGroup(group);
  }
}
