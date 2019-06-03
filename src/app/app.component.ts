import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  quotes = [
// tslint:disable-next-line: max-line-length
    new Quote(1, 'James Mwai', '“The Way Get Started Is To Quit Talking And Begin Doing.”', 'Walt Disney', 0, 0, new Date(2018, 4, 27, 23, 1)),
    new Quote(2, 'James Mwai', '“Don’t Let Yesterday Take Up Too Much Of Today.”', 'Will Rogers', 0, 0, new Date(2018, 4, 27, 23, 1)),
// tslint:disable-next-line: max-line-length
    new Quote(3, 'James Mwai', '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.”', 'Vince Lombardi', 0, 0, new Date(2018, 4, 27, 23, 1)),
// tslint:disable-next-line: max-line-length
    new Quote(4, 'James Mwai', '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”', 'Rob Siltanen', 0, 0, new Date(2018, 4, 27, 23, 1)),
    new Quote(5, 'James Mwai', 'Coding is the epitome if fun', 'Virginia X', 0, 0, new Date(2018, 4, 27, 23, 1)),
    // tslint:disable-next-line: max-line-length
    new Quote(6, 'James Mwai', '“Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?”', 'Brian Tracy', 0, 0, new Date(2018, 4, 27, 23, 1)),
  ];
}

