import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatNativeDateModule, MatRadioModule, MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormService } from './form.service';

@NgModule({
  declarations: [
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
  ],
  imports: [
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
  ],
  exports: [
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
    MatSelectModule,
    DynamicFormComponent,
  ],
  providers: [
    FormService
  ]
})
export class DynamicFormModule { }
