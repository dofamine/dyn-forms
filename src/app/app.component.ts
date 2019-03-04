import { Component } from '@angular/core';
import { form } from './dynamic-form/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form';
  controls = form;
}
