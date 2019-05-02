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
      desc: 'Mira y comparte increíbles fotos de todo el mundo',
      redirectTo:'',
    },
    {
      img: '/assets/vegetables.svg',
      titulo: 'Come sano',
      desc: 'Toda tu música favorita está aquí',
      redirectTo:'',
    },
    {
      img: '/assets/bed.svg',
      titulo: 'Duerme bien',
      desc: 'El mejor calendario del mundo a tu disposición',
      redirectTo:'',
    }
  ];

}
