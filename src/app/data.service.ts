import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { FormFieldJSON } from './models';

export const formData = [
  {
    title: 'text field',
    id: 'text1',
    groupName: 'group3',
    seqNo: 1,
    type: 'text',
  }, {
    title: 'USD',
    id: 'number1',
    groupName: 'group1',
    seqNo: 2,
    type: 'number',
  }, {
    title: 'City',
    id: 'select1',
    groupName: 'group1',
    seqNo: 8,
    type: 'select',
    options: [
      {
        key: 1,
        value: 'New York',
      }, {
        key: 2,
        value: 'Atlanta',
      }, {
        key: 3,
        value: 'LA',
      }, {
        key: 4,
        value: 'California',
      }, {
        key: 5,
        value: 'Omaha',
      },
    ]
  }, {
    title: 'write smthng here',
    id: 'text2',
    groupName: 'group2',
    seqNo: 1,
    type: 'text',
  }, {
    title: 'Bank',
    id: 'radio1',
    groupName: 'group2',
    seqNo: 4,
    type: 'radio',
    options: [
      {
        value: 'BANK1',
      }, {
        value: 'BANK2',
      }, {
        value: 'BANK3',
      },
    ],
  }, {
    title: 'Delivery Date',
    id: 'date1',
    groupName: 'group6',
    seqNo: 56,
    type: 'date',
  }, {
    title: 'Days',
    id: 'number2',
    groupName: 'group6',
    seqNo: 6,
    type: 'number',
  }, {
    title: 'Search1',
    id: 'autocomplete1',
    groupName: 'group3',
    seqNo: 43,
    type: 'autocomplete',
    options: [
      {
        key: 1,
        value: 'case1'
      }, {
        key: 2,
        value: 'case2'
      }, {
        key: 3,
        value: 'case3'
      }, {
        key: 4,
        value: 'case4'
      },
    ]
  }, {
    title: 'provide info',
    id: 'text3',
    groupName: 'group2',
    seqNo: 3,
    type: 'text',
  }, {
    title: 'Search1',
    id: 'autocomplete2',
    groupName: 'group2',
    seqNo: 45,
    type: 'autocomplete',
    options: [
      {
        key: 1,
        value: 'case1'
      }, {
        key: 2,
        value: 'case2'
      }
    ]
  }, {
    title: 'Radio',
    id: 'radio2',
    groupName: 'group6',
    seqNo: 56,
    type: 'radio',
    options: [
      {
        value: '1',
      }, {
        value: '2',
      }, {
        value: '3',
      },
    ],
  },
  {
    title: 'check box3',
    id: 'checkbox1',
    groupName: 'group1',
    seqNo: 8,
    type: 'checkbox',
  },
  {
    title: 'check box2',
    id: 'checkbox2',
    groupName: 'group6',
    seqNo: 65,
    type: 'checkbox',
  },
  {
    title: 'check box1',
    id: 'checkbox3',
    groupName: 'group6',
    seqNo: 635,
    type: 'checkbox',
  }, {
    title: 'some select',
    id: 'select2',
    groupName: 'group6',
    seqNo: 5,
    type: 'select',
    options: [
      {
        key: 1,
        value: 50,
      }, {
        key: 2,
        value: 546,
      }, {
        key: 3,
        value: 386,
      }, {
        key: 4,
        value: 786,
      }, {
        key: 5,
        value: 964,
      }, {
        key: 6,
        value: 789,
      },
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly data$: BehaviorSubject<FormFieldJSON[]> = new BehaviorSubject<FormFieldJSON[]>(formData);

  constructor() {
  }

  public get data(): Observable<FormFieldJSON[]> {
    return this.data$.asObservable();
  }
}
