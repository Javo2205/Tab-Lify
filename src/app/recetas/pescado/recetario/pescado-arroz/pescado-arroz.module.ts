import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PescadoArrozPage } from './pescado-arroz.page';

const routes: Routes = [
  {
    path: '',
    component: PescadoArrozPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PescadoArrozPage]
})
export class PescadoArrozPageModule {}
