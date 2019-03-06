import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormFieldJSON, FormModel } from '../models';


@Injectable()
export class FormService {

  private static sortControls(groups: FormModel) {
    for (const key in groups) {
      if (groups.hasOwnProperty(key)) {
        groups[key].sort(({ seqNo: a }, { seqNo: b }) => a - b);
      }
    }
  }

  getForm(controls: FormFieldJSON[]): FormGroup {
    const groups: any = this.getFormAsObjectModel(controls);

    for (const key in groups) {
      if (groups.hasOwnProperty(key)) {
        groups[key] = this.toFormGroup(groups[key]);
      }
    }

    return new FormGroup(groups);
  }

  getFormAsObjectModel(controls: FormFieldJSON[]): FormModel {
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

  toFormGroup(controls: FormFieldJSON[]): FormGroup {
    const group: any = {};

    controls.forEach(control => {
      group[control.id] = new FormControl(control.value || '');
    });

    return new FormGroup(group);
  }
}
