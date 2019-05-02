import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']  

  
})
export class Tab1Page {


  slides: { img: string, titulo: string, desc: string, redirectTo: string }[] = [
    {
      img: '/assets/res.jpg',
      titulo: 'Carne',
      desc: 'Mira las increibles recetas que tenemos para ti',
      redirectTo: '/carne'
    },
    {
      img: '/assets/pollo.jpg',
      titulo: 'Pollo',
      desc: 'Mira las increibles recetas que tenemos para ti',
      redirectTo: '/pollo'
    },
    {
      img: '/assets/pescado.jpg',
      titulo: 'Pescado',
      desc: 'Mira las increibles recetas que tenemos para ti',
      redirectTo: '/pescado'
    },
    {
      img: '/assets/postres.jpg',
      titulo: 'Postres',
      desc: 'Mira las increibles recetas que tenemos para ti',
      redirectTo: '/postres'
    }
  ];

  constructor(public navCtrl: NavController){}

  

}


