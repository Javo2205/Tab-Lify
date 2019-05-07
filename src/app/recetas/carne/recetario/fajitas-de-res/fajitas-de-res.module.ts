import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FajitasDeResPage } from './fajitas-de-res.page';
import { ComponentsModule } from 'src/app/components/components.module';



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
    ComponentsModule
  ],
  declarations: [FajitasDeResPage]
})
export class FajitasDeResPageModule {}
