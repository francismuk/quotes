import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
        new Quote(1,'James Mwai', '“The Way Get Started Is To Quit Talking And Begin Doing.”', 'Walt Disney',new Date(2018, 4, 27, 23, 1),1, 2),
        new Quote(2,'James Mwai', '“Don’t Let Yesterday Take Up Too Much Of Today.”', 'Will Rogers',  10, 2),
        new Quote(3, 'James Mwai','“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.”', 'Vince Lombardi',new Date(2018, 4, 27, 23, 1), 10, 2),
// tslint:disable-next-line: max-line-length
        new Quote(4,'James Mwai', '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”','Rob Siltanen',new Date(2018, 4, 27, 23, 1), 10, 2),
        new Quote(5,'James Mwai','Coding is the epitome if fun', 'Virginia X', 0, 0),
        // tslint:disable-next-line: max-line-length
        new Quote(6, 'James Mwai','“Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?”', 'Brian Tracy',new Date(2018, 4, 27, 23, 1),  10, 2),
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

