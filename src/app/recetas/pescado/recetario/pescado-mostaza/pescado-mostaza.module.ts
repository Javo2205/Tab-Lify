import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PescadoMostazaPage } from './pescado-mostaza.page';

const routes: Routes = [
  {
    path: '',
    component: PescadoMostazaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PescadoMostazaPage]
})
export class PescadoMostazaPageModule {}
