import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.page.html',
  styleUrls: ['./postres.page.scss'],
})
export class PostresPage implements OnInit {

  componentes: Componente[] = [
    {
      name: 'Bizocho de naranja',
      redirectTo: '/bizcoho-naranja',
      calorias: '379 kcal'
    }
  ];

  constructor() { }

  ngOnInit() {
  } 

}

interface Componente{
  name: string;
  redirectTo: string;
  calorias: string
}
