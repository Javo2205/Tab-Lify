import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FajitasDeResPage } from './fajitas-de-res.page';


const routes: Routes = [
  {
    path: '',
    component: FajitasDeResPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [FajitasDeResPage]
})
export class FajitasDeResPageModule {}
