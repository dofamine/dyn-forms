import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Models } from './models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  controls: Observable<Models[]>;
  payload: string;

  constructor(private readonly dataService: DataService) {
    this.controls = dataService.data;
  }

  onSubmit(payload: string) {
    this.payload = payload;
  }

  onChange(form: FormGroup) {
    this.payload = JSON.stringify(form);
  }
}
