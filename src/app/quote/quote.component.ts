import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
        new Quote(1, 'Watch Finding Nemo', 'By James Mwai',),
        new Quote(2, 'Buy Cookies', 'By Raphael Katana'),
        new Quote(3, 'Get new Phone Case', 'By John Kariuki'),
        new Quote(4, 'Get Dog Food', 'By Karanja Nguku'),
        new Quote(5, 'Solve math homework', 'Virginia X'),
        new Quote(6, 'Plot my world domination plan', 'Wambugu Karis'),
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

