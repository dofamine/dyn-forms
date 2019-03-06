import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormFieldJSON } from '../../../models';
import { FieldTypes } from '../../../app-config';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormControlComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() controlModel: FormFieldJSON;

  get autocomplete(): string {
    return FieldTypes.autocomplete;
  }

  get text(): string {
    return FieldTypes.text;
  }

  get select(): string {
    return FieldTypes.select;
  }

  get date(): string {
    return FieldTypes.date;
  }

  get radio(): string {
    return FieldTypes.radio;
  }

  get checkbox(): string {
    return FieldTypes.checkbox;
  }

  get number(): string {
    return FieldTypes.number;
  }

  ngOnInit(): void {
    // console.log(this.controlModel, this.control);
  }
}
