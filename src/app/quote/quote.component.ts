import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
        new Quote(1, '“The Way Get Started Is To Quit Talking And Begin Doing.”','By James Mwai', 'Walt Disney','10', '2'),
        new Quote(2, '“Don’t Let Yesterday Take Up Too Much Of Today.”','By James Mwai', 'Will Rogers',  '10', '2'),
        new Quote(3, '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.”', 'Vince Lombardi', 'By James Mwai',  '10', '2'),
// tslint:disable-next-line: max-line-length
        new Quote(4, '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”','By James Mwai', 'Rob Siltanen', '10', '2'),
        new Quote(5, '“We May Encounter Many Defeats But We Must Not Be Defeated.”','By James Mwai', 'Maya Angelou', '10', '2'),
// tslint:disable-next-line: max-line-length
        new Quote(6, '“Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?”','By James Mwai', 'Brian Tracy',  '10', '2'),
    ]

    deleteQuote(isComplete, index){
      if (isComplete){
          let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

          if (toDelete){
              this.quotes.splice(index, 1)
          }
      }
    }

    completeQuote(isComplete, index){
      if (isComplete){
          this.quotes.splice(index, 1);
          }
          }



          addNewQuote(quote){
            let quoteLength = this.quotes.length;
            quote.id = quoteLength + 1;
            this.quotes.push(quote)

        }

    toogleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }
}

