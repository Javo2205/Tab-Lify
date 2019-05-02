import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnsaladaToscanaPage } from './ensalada-toscana.page';

const routes: Routes = [
  {
    path: '',
    component: EnsaladaToscanaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnsaladaToscanaPage]
})
export class EnsaladaToscanaPageModule {}
