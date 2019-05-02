import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SopaBlancaPage } from './sopa-blanca.page';

const routes: Routes = [
  {
    path: '',
    component: SopaBlancaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SopaBlancaPage]
})
export class SopaBlancaPageModule {}
