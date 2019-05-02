import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'carne', loadChildren: './recetas/carne/carne.module#CarnePageModule' },
  { path: 'pollo', loadChildren: './recetas/pollo/pollo.module#PolloPageModule' },
  { path: 'pescado', loadChildren: './recetas/pescado/pescado.module#PescadoPageModule' },
  { path: 'fajitas-de-res', loadChildren: './recetas/carne/recetario/fajitas-de-res/fajitas-de-res.module#FajitasDeResPageModule' },  { path: 'ensalada-pollo-bufaflo', loadChildren: './recetas/pollo/recetario/ensalada-pollo-bufaflo/ensalada-pollo-bufaflo.module#EnsaladaPolloBufafloPageModule' },
  { path: 'postres', loadChildren: './recetas/postres/postres.module#PostresPageModule' },
  { path: 'bizcocho-naranja', loadChildren: './recetas/postres/recetario/bizcocho-naranja/bizcocho-naranja.module#BizcochoNaranjaPageModule' },
  { path: 'chili', loadChildren: './recetas/carne/recetario/chili/chili.module#ChiliPageModule' },
  { path: 'lasana', loadChildren: './recetas/carne/recetario/lasana/lasana.module#LasanaPageModule' },
  { path: 'muffins', loadChildren: './recetas/carne/recetario/muffins/muffins.module#MuffinsPageModule' },
  { path: 'pimientos', loadChildren: './recetas/carne/recetario/pimientos/pimientos.module#PimientosPageModule' },
  { path: 'ensalada', loadChildren: './recetas/carne/recetario/ensalada/ensalada.module#EnsaladaPageModule' },
  { path: 'pasta', loadChildren: './recetas/carne/recetario/pasta/pasta.module#PastaPageModule' },
  { path: 'filete', loadChildren: './recetas/carne/recetario/filete/filete.module#FiletePageModule' },
  { path: 'gratinado', loadChildren: './recetas/carne/recetario/gratinado/gratinado.module#GratinadoPageModule' },
  { path: 'filete-huevo', loadChildren: './recetas/carne/recetario/filete-huevo/filete-huevo.module#FileteHuevoPageModule' },
  { path: 'solomillo', loadChildren: './recetas/carne/recetario/solomillo/solomillo.module#SolomilloPageModule' },
  { path: 'pescado-arroz', loadChildren: './recetas/pescado/recetario/pescado-arroz/pescado-arroz.module#PescadoArrozPageModule' },
  { path: 'pescado-mostaza', loadChildren: './recetas/pescado/recetario/pescado-mostaza/pescado-mostaza.module#PescadoMostazaPageModule' },
  { path: 'hamburguesa', loadChildren: './recetas/pescado/recetario/hamburguesa/hamburguesa.module#HamburguesaPageModule' },
  { path: 'pescado-gratinado', loadChildren: './recetas/pescado/recetario/pescado-gratinado/pescado-gratinado.module#PescadoGratinadoPageModule' },
  { path: 'sopa-picante', loadChildren: './recetas/pescado/recetario/sopa-picante/sopa-picante.module#SopaPicantePageModule' },
  { path: 'pescado-frito', loadChildren: './recetas/pescado/recetario/pescado-frito/pescado-frito.module#PescadoFritoPageModule' },
  { path: 'huevos', loadChildren: './recetas/pescado/recetario/huevos/huevos.module#HuevosPageModule' },
  { path: 'ensalada-nizarda', loadChildren: './recetas/pescado/recetario/ensalada-nizarda/ensalada-nizarda.module#EnsaladaNizardaPageModule' },
  { path: 'rollito', loadChildren: './recetas/pescado/recetario/rollito/rollito.module#RollitoPageModule' },
  { path: 'ensalada-toscana', loadChildren: './recetas/pescado/recetario/ensalada-toscana/ensalada-toscana.module#EnsaladaToscanaPageModule' },
  { path: 'sesamo', loadChildren: './recetas/pollo/recetario/sesamo/sesamo.module#SesamoPageModule' },
  { path: 'patatas', loadChildren: './recetas/pollo/recetario/patatas/patatas.module#PatatasPageModule' },
  { path: 'mediterraneo', loadChildren: './recetas/pollo/recetario/mediterraneo/mediterraneo.module#MediterraneoPageModule' },
  { path: 'mango', loadChildren: './recetas/pollo/recetario/mango/mango.module#MangoPageModule' },
  { path: 'alfredo', loadChildren: './recetas/pollo/recetario/alfredo/alfredo.module#AlfredoPageModule' },
  { path: 'quinoa', loadChildren: './recetas/pollo/recetario/quinoa/quinoa.module#QuinoaPageModule' },
  { path: 'burrito', loadChildren: './recetas/pollo/recetario/burrito/burrito.module#BurritoPageModule' },
  { path: 'sopa-blanca', loadChildren: './recetas/pollo/recetario/sopa-blanca/sopa-blanca.module#SopaBlancaPageModule' },
  { path: 'sopa-pollo', loadChildren: './recetas/pollo/recetario/sopa-pollo/sopa-pollo.module#SopaPolloPageModule' },
  { path: 'garbanzoa', loadChildren: './recetas/pollo/recetario/garbanzoa/garbanzoa.module#GarbanzoaPageModule' },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
