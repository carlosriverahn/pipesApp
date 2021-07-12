import { Component } from '@angular/core';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styleUrls: ['./not-commons.component.css']
})
export class NotCommonsComponent {
  
//i18nSelect
  people1: any = {
    name : "Carlos",
    gender : "male"
  }

  people2: any = {
    name : "Susana",
    gender : "feminine"
  }

  optionsMap = {
    "male" : "you are a great man",
    "feminine" : " you are beautifull woman"
  }

  //i18nPlura
  singularClient: string [] = ["Carlos"];
  pluralClients: string [] = ["Susana", "Robert", "Marcos"];

  clientsMap = {
    "=0": "No customers in queue",
    "=1": "there is 1 client in queue",
    "other" : "we have # clients in queue"
  }

}
