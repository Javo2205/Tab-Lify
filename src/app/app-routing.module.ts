import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'carne', loadChildren: './recetas/carne/carne.module#CarnePageModule' },
  { path: 'pollo', loadChildren: './recetas/pollo/pollo.module#PolloPageModule' },
  { path: 'pescado', loadChildren: './recetas/pescado/pescado.module#PescadoPageModule' },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
