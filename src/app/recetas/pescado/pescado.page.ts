import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pescado',
  templateUrl: './pescado.page.html',
  styleUrls: ['./pescado.page.scss'],
})
export class PescadoPage implements OnInit {

  componentes: Componente[] = [
    {
      name:'One pan de pescado con arroz',
      redirectTo:'/fajita-de-res',
      calorias: '452 kcal'
    },
    {
      name: 'One pan de pescado con salsa de mostaza',
      redirectTo: '/action-sheet',
      calorias: '453 kcal'
    },
    {
      name: 'Hamburguesa de pescado',
      redirectTo: '/alert',
      calorias: '168 kcal'
    },
    {
      name: 'Pescado gratinado con tomante',
      redirectTo: '/avatar',
      calorias: '412 kcal'
    },
    {
      name: 'Sopa picante de pescado y tomate',
      redirectTo: '/botones',
      calorias: '265 kcal'
    },
    {
      name: 'Pescado frito con espinacas y al curry',
      redirectTo: '/card',
      calorias: '437 kcal'
    },
    {
      name: 'Huevos revueltos con salmon',
      redirectTo: '/check',
      calorias: '500 kcal'
    },
    {
      name: 'Ensalada nizarda',
      redirectTo: '/date-time',
      calorias: '560 kcal'
    },
    {
      name: 'Rollito de salmon',
      redirectTo: '/card',
      calorias: '506 kcal'
    },
    {
      name: 'Ensalda toscana caliente con atun',
      redirectTo: '/check',
      calorias: '436 kcal'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{

    name: string,
    redirectTo: string,
    calorias: string
}
