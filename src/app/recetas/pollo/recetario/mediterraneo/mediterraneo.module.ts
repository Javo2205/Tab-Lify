import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MediterraneoPage } from './mediterraneo.page';

const routes: Routes = [
  {
    path: '',
    component: MediterraneoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MediterraneoPage]
})
export class MediterraneoPageModule {}
