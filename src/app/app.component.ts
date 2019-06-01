import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  quote: string[];

  constructor(){

    this.quotes = ["Wherever life plants you, bloom with grace","The Way Get Started Is To Quit Talking And Begin Doing","Don’t Let Yesterday Take Up Too Much Of Today."];
  }
}
