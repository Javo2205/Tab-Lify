import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PescadoGratinadoPage } from './pescado-gratinado.page';

const routes: Routes = [
  {
    path: '',
    component: PescadoGratinadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PescadoGratinadoPage]
})
export class PescadoGratinadoPageModule {}
