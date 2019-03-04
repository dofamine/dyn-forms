import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseControl } from '../base-control';
import { BehaviorSubject, Observable } from 'rxjs';

export const form = [
  {
    id: 'someid',
    groupName: 'group3',
    seqNo: 1,
    type: 'text',
  }, {
    id: 'somewe',
    groupName: 'group1',
    seqNo: 5,
    type: 'checkbox',
  }, {
    id: 'ewqe',
    groupName: 'group1',
    seqNo: 2,
    type: 'text',
  }, {
    id: 'dsad',
    groupName: 'group1',
    seqNo: 8,
    type: 'select',
  }, {
    id: 'frevfdv',
    groupName: 'group2',
    seqNo: 1,
    type: 'text',
  }, {
    id: 'dwerd',
    groupName: 'group2',
    seqNo: 4,
    type: 'radio',
  }, {
    id: 'd324werd',
    groupName: 'group6',
    seqNo: 56,
    type: 'date',
  }, {
    id: 'dsafsafefdsv',
    groupName: 'group5',
    seqNo: 6,
    type: 'number',
  }, {
    id: 'dwerd',
    groupName: 'group3',
    seqNo: 43,
    type: 'autocomplete',
  }, {
    id: 'dwerd',
    groupName: 'group2',
    seqNo: 3,
    type: 'text',
  }, {
    id: 'sadsadewfs',
    groupName: 'group2',
    seqNo: 45,
    type: 'autocomplete',
  }, {
    id: 'dwerd',
    groupName: 'group6',
    seqNo: 56,
    type: 'radio',
  }, {
    id: 'dwerd',
    groupName: 'group5',
    seqNo: 635,
    type: 'checkbox',
  }, {
    id: 'dwerd',
    groupName: 'group2',
    seqNo: 5,
    type: 'select',
  }
];

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private readonly data = new BehaviorSubject({});

  constructor() {
  }

  get from(): Observable<any> {
    return this.data.asObservable();
  }

  getForm(controls: BaseControl<any>[]) {
    const groups: any = {};

    controls.forEach((control) => {
      if (!groups[control.groupName]) {
        groups[control.groupName] = [];
      }
      groups[control.groupName].push(control);
    });
    // for (const key in groups) {
    //   if (groups.hasOwnProperty(key)) {
    //     groups[key] = this.toFormGroup(groups[key]);
    //   }
    // }
    // this.getFormAsArrays(controls);
    // return new FormGroup(groups);
    return groups;
  }

  getFormAsArrays(controls) {
    // const groups: any = new Map();
    //
    // controls.forEach((control) => {
    //   if (!groups.has(control.groupName)) {
    //     groups.set(control.groupName, []);
    //   }
    //   groups.get(control.groupName).push(control);
    // });
    //
    // console.log(groups);

    // for (const key in groups) {
    //   if (groups.hasOwnProperty(key)) {
    //     groups[key] = this.toFormGroup(groups[key]);
    //   }
    // }
    //
    // return new FormGroup(groups);
  }

  toFormGroup(controls: BaseControl<any>[]) {
    const group: any = {};

    controls.forEach(control => {
      group[control.id] = new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }
}
