import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { FormFieldJSON, FormModel } from '../models';
import { FormService } from './form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit {
  @Input() controls: FormFieldJSON[] = [];
  @Input() change: OnChangeHandlerFn;
  @Output() submitEmitter: EventEmitter<string> = new EventEmitter<string>();
  form: FormGroup;
  model: FormModel;

  constructor(private readonly formService: FormService) {
  }

  get groups(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get groupKeys(): string[] {
    return Object.keys(this.groups);
  }

  ngOnInit() {
    this.initForm();
    this.model = this.formService.getFormAsObjectModel(this.controls);
  }

  onSubmit() {
    this.submitEmitter.emit(JSON.stringify(this.form.value));
  }

  initForm() {
    this.form = this.formService.getForm(this.controls);
    this.form.valueChanges.subscribe(this.change);
  }
}

type OnChangeHandlerFn = (form: FormGroup) => any;
