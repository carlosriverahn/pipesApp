import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent {

  constructor() { }

  sales: number = 3453542.2345;
  percentage: number = 0.38;

}
