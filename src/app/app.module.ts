import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormControlComponent } from './dynamic-form/dynamic-form-control/dynamic-form-control.component';
import { AutocompleteComponent } from './dynamic-form/dynamic-form-control/autocomplete/autocomplete.component';
import { CheckboxComponent } from './dynamic-form/dynamic-form-control/checkbox/checkbox.component';
import { TextComponent } from './dynamic-form/dynamic-form-control/text/text.component';
import { RadioComponent } from './dynamic-form/dynamic-form-control/radio/radio.component';
import { SelectComponent } from './dynamic-form/dynamic-form-control/select/select.component';
import { DateComponent } from './dynamic-form/dynamic-form-control/date/date.component';
import { NumberComponent } from './dynamic-form/dynamic-form-control/number/number.component';
import { DynamicFormGroupComponent } from './dynamic-form/dynamic-form-group/dynamic-form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormControlComponent,
    AutocompleteComponent,
    CheckboxComponent,
    TextComponent,
    RadioComponent,
    SelectComponent,
    DateComponent,
    NumberComponent,
    DynamicFormGroupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
