import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnsaladaPolloBufafloPage } from './ensalada-pollo-bufaflo.page';

const routes: Routes = [
  {
    path: '',
    component: EnsaladaPolloBufafloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnsaladaPolloBufafloPage]
})
export class EnsaladaPolloBufafloPageModule {}
