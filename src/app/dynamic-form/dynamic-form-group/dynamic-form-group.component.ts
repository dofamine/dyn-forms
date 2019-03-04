import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-dynamic-form-group',
  templateUrl: './dynamic-form-group.component.html',
  styleUrls: ['./dynamic-form-group.component.scss']
})
export class DynamicFormGroupComponent implements OnInit {
  @Input() group;
  @Input() form;
  formGroup: FormGroup;

  constructor(private readonly formService: FormService) {}

  ngOnInit() {
    this.formGroup = this.formService.toFormGroup(this.group);
  }
}
