import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Models } from './models';

export const formData = [
  {
    title: 'text title',
    id: 'somdsfdseid',
    groupName: 'group3',
    seqNo: 1,
    type: 'text',
  }, {
    title: 'USD',
    id: 'fdsfdsfsce',
    groupName: 'group1',
    seqNo: 2,
    type: 'number',
  }, {
    title: 'City',
    id: 'tgfdvtrsvdf',
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
    id: 'gtgfdvtwrvdf',
    groupName: 'group2',
    seqNo: 1,
    type: 'text',
  }, {
    title: 'Bank',
    id: 'gfdsbertbfdg',
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
    id: 'gsfdbtrgfgdtresdtg',
    groupName: 'group6',
    seqNo: 56,
    type: 'date',
  }, {
    title: 'Days',
    id: 'gfdsgtr',
    groupName: 'group5',
    seqNo: 6,
    type: 'number',
  }, {
    title: 'Search1',
    id: 'gfdbrtdfgsergft',
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
    id: 'gfdbtrbfddy',
    groupName: 'group2',
    seqNo: 3,
    type: 'text',
  }, {
    title: 'Search1',
    id: 'gtvgfxbfx',
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
    id: 'hfdhtfhgfjhnlk',
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
  }, {
    title: 'check box',
    id: 'hgjnmfumhj',
    groupName: 'group5',
    seqNo: 635,
    type: 'checkbox',
    options: [
      {
        value: '1',
      }, {
        value: '2',
      }, {
        value: '3',
      },
    ]
  }, {
    title: 'some select',
    id: 'mjhkhgyghjnfuy',
    groupName: 'group9',
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
  private readonly data$: BehaviorSubject<Models[]> = new BehaviorSubject<Models[]>(formData);

  constructor() {
  }

  public get data(): Observable<Models[]> {
    return this.data$.asObservable();
  }
}
