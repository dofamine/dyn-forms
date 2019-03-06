import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormControlComponent } from './dynamic-form/dynamic-form-group/dynamic-form-control/dynamic-form-control.component';
import { AutocompleteComponent } from './dynamic-form/dynamic-form-group/dynamic-form-control/autocomplete/autocomplete.component';
import { CheckboxComponent } from './dynamic-form/dynamic-form-group/dynamic-form-control/checkbox/checkbox.component';
import { TextComponent } from './dynamic-form/dynamic-form-group/dynamic-form-control/text/text.component';
import { RadioComponent } from './dynamic-form/dynamic-form-group/dynamic-form-control/radio/radio.component';
import { SelectComponent } from './dynamic-form/dynamic-form-group/dynamic-form-control/select/select.component';
import { DateComponent } from './dynamic-form/dynamic-form-group/dynamic-form-control/date/date.component';
import { NumberComponent } from './dynamic-form/dynamic-form-group/dynamic-form-control/number/number.component';
import { DynamicFormGroupComponent } from './dynamic-form/dynamic-form-group/dynamic-form-group.component';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
