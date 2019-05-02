import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SopaPolloPage } from './sopa-pollo.page';

const routes: Routes = [
  {
    path: '',
    component: SopaPolloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SopaPolloPage]
})
export class SopaPolloPageModule {}
