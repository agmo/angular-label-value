import { Component } from '@angular/core';
import { contacts } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contacts = contacts;

  keepOriginalKeyOrder() {
    return 0;
  }
}
