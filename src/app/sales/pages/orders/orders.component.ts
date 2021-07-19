import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Heroe } from '../../interfaces/sales';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  condition: boolean = true;
  items: MenuItem[] = [];
  sortBy: number = 0;
  heroes: Heroe [] = [
    {
      name: "Superman",
      fly: true,
      color: Color.blue
    },
    {
      name: "Batman",
      fly: false,
      color: Color.black
    },
    {
      name: "Robin",
      fly: false,
      color: Color.red
    },
    {
      name: "Wonder Woman",
      fly: true,
      color: Color.red
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.toolbarPrimeNG();

  }

  toolbarPrimeNG(){
    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      },
      {
          label: 'Angular',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
      },
      {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
      }
    ];

  }

  changeText(){
    this.condition = !this.condition;
    // console.log(this.condition);

  }

  setSortBy( value: number ){
    this.sortBy = value;
  }

}
