import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote ('Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.', 'Dale Carnegie', 'Lex'),
  ];

  completeQuote(isComplete, index) {
       if (isComplete) {
           this.quotes.splice(index, 1);
           }
           }
addNewQuote(quote) {
this.quotes.push(quote);
}


  constructor() { }


  ngOnInit() {
  }

}
