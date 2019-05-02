import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pollo',
  templateUrl: './pollo.page.html',
  styleUrls: ['./pollo.page.scss'],
})
export class PolloPage implements OnInit {

  componentes: Componente[] = [
    {
      name:'Ensalada pollo buffalo',
      redirectTo:'/ensalada-pollo-bufalo',
      calorias: '379 kcal'
    },
    {
      name: 'Pollo al sesamo con arroz y brocoli',
      redirectTo: '/sesamo',
      calorias: '469 kcal'
    },
    {
      name: 'Pollo con patatas',
      redirectTo: '/patatas',
      calorias: '299 kcal'
    },
    {
      name: 'Pollo mediterraneo con tomates',
      redirectTo: '/mediterraneo',
      calorias: '298 kcal'
    },
    {
      name: 'Sandwich de pollo al mango',
      redirectTo: '/mango',
      calorias: '353 kcal'
    },
    {
      name: 'Pollo Alfredo con espaguetis de calabacin',
      redirectTo: '/alfredo',
      calorias: '534 kcal'
    },
    {
      name: 'Pechuga de pollo con quinoa de verduras',
      redirectTo: '/quinoa',
      calorias: '418 kcal'
    },
    {
      name: 'Burritos de pollo al horno',
      redirectTo: '/burrito',
      calorias: '373 kcal'
    },
    {
      name: 'Sopa blanca de pollo',
      redirectTo: '/sopa-blanca',
      calorias: '226 kcal'
    },
    {
      name: 'Sopa de pollo y pasta',
      redirectTo: '/sopa-pollo',
      calorias: '190 kcal'
    },
    {
      name: 'Pollo piacnte con garbanzos',
      redirectTo: '/garbanzoa',
      calorias: '298 kcal'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{

  name: string;
  redirectTo: string
  calorias: string
}
