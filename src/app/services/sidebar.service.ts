import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main',url: '/admin'},
        { title: 'ProgressBar',url: '/admin/progress'},
        { title: 'Gráficas',url: '/admin/grafical'},
        { title: 'Promesas',url: '/admin/promesas'},
        { title: 'Rxjs',url: '/admin/rxjs'}
      ]
    },

  ];

  constructor() { }
}
