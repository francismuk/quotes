import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  quotes = [
      new Quote(1,'Watch Finding Nemo', 'ss'),
      new Quote(2,'Buy Cookies', 'ss'),
      new Quote(3, 'Get new Phone Case', 'ss'),
      new Quote(4, 'Get Dog Food', 'ss'),
      new Quote(5, 'Solve math homework', 'ss'),
      new Quote(6, 'Plot my world domination plan', 'ss'),

  ]
}

