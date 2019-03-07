import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatNativeDateModule, MatRadioModule, MatSelectModule
} from '@angular/material';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormControlComponent } from './dynamic-form-group/dynamic-form-control/dynamic-form-control.component';
import { AutocompleteComponent } from './dynamic-form-group/dynamic-form-control/autocomplete/autocomplete.component';
import { CheckboxComponent } from './dynamic-form-group/dynamic-form-control/checkbox/checkbox.component';
import { TextComponent } from './dynamic-form-group/dynamic-form-control/text/text.component';
import { RadioComponent } from './dynamic-form-group/dynamic-form-control/radio/radio.component';
import { SelectComponent } from './dynamic-form-group/dynamic-form-control/select/select.component';
import { DateComponent } from './dynamic-form-group/dynamic-form-control/date/date.component';
import { NumberComponent } from './dynamic-form-group/dynamic-form-control/number/number.component';
import { DynamicFormGroupComponent } from './dynamic-form-group/dynamic-form-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormService } from './form.service';

const MODULES = [
  CommonModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatRadioModule,
  MatSelectModule
];

const COMPONENTS = [
  DynamicFormComponent,
  DynamicFormControlComponent,
  AutocompleteComponent,
  CheckboxComponent,
  TextComponent,
  RadioComponent,
  SelectComponent,
  DateComponent,
  NumberComponent,
  DynamicFormGroupComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: MODULES,
  exports: [...COMPONENTS, ...MODULES],
  providers: [FormService]
})
export class DynamicFormModule {
}
