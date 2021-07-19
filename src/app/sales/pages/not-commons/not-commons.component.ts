import { Component } from '@angular/core';
import { interval } from 'rxjs';

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
    gender : "female"
  }


  optionsMap = {
    "male" : "you are a great man",
    "female" : " you are beautifull woman"
  }

  //keyValuePipe
  peoplePipeKeyvalue = {
    name: 'Carlos',
    age: 36,
    address: 'Sevilla'
  }

  //JsonPipe
  heroes = [
    {
      name: 'Superman',
      Flying: 'true'
    },
    {
      name: 'Robin',
      Flying: 'false'
    },
    {
      name: 'Aquaman',
      Flying: 'false'
    },
  ]

  //Async Pipe
  myObservable = interval(1000);

  valuePromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve("Data from a Promise")

    },3500);
    
  })

  //i18nPlura
  singularClient: string [] = ["Carlos"];
  pluralClients: string [] = ["Susana", "Robert", "Marcos", "Carlos", "Rafa"];

  clientsMap = {
    "=0": "No customers in queue",
    "=1": "there is 1 client in queue",
    "other" : "we have # clients in queue"
  }

  changePeople() {
    this.people2= {
      name : "Rafa",
      gender : "male"
    }

  }

  deleteClient() {
    this.pluralClients.pop();
  }

}
