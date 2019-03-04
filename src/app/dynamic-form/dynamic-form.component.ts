import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControl } from '../base-control';
import { FormService } from './form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() controls: BaseControl<any>[] = [];
  form: FormGroup = new FormGroup({});
  groups: any;
  groupKeys: any;
  payLoad = '';

  constructor(private service: FormService) {  }

  ngOnInit() {
    this.groups = this.service.getForm(this.controls);
    console.log(this.groupKeys = Object.keys(this.groups));
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
