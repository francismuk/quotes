import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
        new Quote(1,'Watch Finding Nemo','By James Mwai'),
        new Quote(2,'Buy Cookies', 'By Raphael Katana'),
        new Quote(3, 'Get new Phone Case', 'By John Kariuki'),
        new Quote(4, 'Get Dog Food', 'By Karanja Nguku'),
        new Quote(5, 'Solve math homework', 'Virginia X'),
        new Quote(6, 'Plot my world domination plan', 'Wambugu Karis'),
    ]

    completeQuote(isComplete,index){
      if (isComplete){
          this.quotes.splice(index,1);
          }
          }


    toogleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }
}

