import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  slides: { img: string, titulo: string, desc: string, redirectTo: string }[] = [
    {
      img: '/assets/bicicleta.svg',
      titulo: 'Haz ejercicio',
      desc: 'Hacer ejercicio regularmente, al menos 3-5 veces a la semana.',
      redirectTo:'/comer-bien',
    },
    {
      img: '/assets/vegetables.svg',
      titulo: 'Come sano',
      desc: 'Mira todas la recomendaciones que tenemos para ti, para poder llevar una alimentacion sana',
      redirectTo:'/comer-bien',
    },
    {
      img: '/assets/bed.svg',
      titulo: 'Duerme bien',
      desc: 'Mira los beneficios que tienes cuando duermes el tiempo suficiente',
      redirectTo:'/dormir-bien',
    }
  ];

}
