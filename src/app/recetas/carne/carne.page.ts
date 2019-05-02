import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carne',
  templateUrl: './carne.page.html',
  styleUrls: ['./carne.page.scss'],
})
export class CarnePage implements OnInit {

  componentes: Componente[] = [
    {
      img: 'assets/recetario/carne/fajitas.jpg',
      name: 'Fajita de Res con Nopales',
      redirectTo: '/fajitas-de-res',
      calorias: '379 kcal'
    },
    {
      img: '/assets/recetario/carne/chili.jpeg',
      name: 'Chili con carne',
      redirectTo: '/chili',
      calorias: '379 kcal'
    },
    {
      img: '/assets/recetario/carne/lasana.jpeg',
      name: 'Lasaña de carne picada y calabacin',
      redirectTo: '/lasana',
      calorias: '591 kcal'
    },
    {
      img: 'assets/recetario/carne/muffins.jpeg',
      name: 'Muffins salados de desayuno',
      redirectTo: '/muffins',
      calorias: '293 kcal'
    },
    {
      img: '/assets/recetario/carne/pimiento.jpeg',
      name: 'Pimientos rellenos de ternera',
      redirectTo: '/pimientos',
      calorias: '415 kcal'
    },
    {
      img: '/assets/recetario/carne/ensalada.jpeg',
      name: 'Ensalada de cheeseburger',
      redirectTo: '/ensalada',
      calorias: '577 kcal'
    },
    {
      img: '/assets/recetario/carne/pasta.jpeg',
      name: 'Pasta de calabacin con salsa boloñesa',
      redirectTo: '/pasta',
      calorias: '532 kcal'
    },
    {
      img: '/assets/recetario/carne/filete.jpeg',
      name: 'Filete de ternera con judias verdes',
      redirectTo: '/filete',
      calorias: '323 kcal'
    },
    {
      img: '/assets/recetario/carne/gratinado.jpeg',
      name: 'Gratinado de ternera, batata y queso feta',
      redirectTo: '/gratinado',
      calorias: '578 kcal'
    },
    {
      img: '/assets/recetario/carne/filete_huevo.jpeg',
      name: 'Filete de ternera con huevo frito y ensalada',
      redirectTo: '/filete-huevo',
      calorias: '502 kcal'
    },
    {
      img: '/assets/recetario/carne/solomillo.jpeg',
      name: 'Solomillo de ternera con ensalda caliente de arroz',
      redirectTo: '/solomillo',
      calorias: '501 kcal'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  img: string;
  name: string;
  redirectTo: string;
  calorias: string;
}

