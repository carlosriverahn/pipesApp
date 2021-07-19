import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
     {
       label: 'Angular Pipes',
       icon: 'pi pi-align-left',
       items: [
         {
           label: 'Text and Dates',
           icon: 'pi pi-align-left',
           routerLink: '/'
         },
         {
          label: 'Numbers',
          icon: 'pi pi-dollar',
          routerLink: 'numbers'
        },
         {
          label: 'Not Commons',
          icon: 'pi pi-globe',
          routerLink: 'not-commons'
        },
       ]
     },
     {
       label:'Perzonalizer Pipes',
       icon: 'pi pi-cog',
       routerLink: 'orders'       
     }
    ];
  }

}
