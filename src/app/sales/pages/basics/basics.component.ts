import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent{

  constructor() { }

  nameLowerCase: string = "carlos rivera";
  nameUpperCase: string = "CARLOS RIVERA";
  fullName: string = "CaRlOs RiVerA";
  
  date: Date = new Date();

}
