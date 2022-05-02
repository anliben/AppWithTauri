import { GenerateLoremComponent } from './components/generate-lorem/generate-lorem.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'generate-imagens',
    loadChildren: () => import('./components/generate-imagens/generate-imagens.module').then( m => m.GenerateImagensModule)
  },
  {
    path: 'generate-lorem',
    loadChildren: () => import('./components/generate-lorem/generate-lorem.module').then( m => m.GenerateLoremModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
