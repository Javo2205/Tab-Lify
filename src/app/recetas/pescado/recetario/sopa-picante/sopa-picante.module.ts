import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SopaPicantePage } from './sopa-picante.page';

const routes: Routes = [
  {
    path: '',
    component: SopaPicantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SopaPicantePage]
})
export class SopaPicantePageModule {}
