import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnsaladaNizardaPage } from './ensalada-nizarda.page';

const routes: Routes = [
  {
    path: '',
    component: EnsaladaNizardaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnsaladaNizardaPage]
})
export class EnsaladaNizardaPageModule {}
