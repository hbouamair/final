import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },  
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'inventaire',
    loadChildren: () => import('./inventaire/inventaire.module').then( m => m.InventairePageModule)
  },
  {
    path: 'create-inv',
    loadChildren: () => import('./create-inv/create-inv.module').then( m => m.CreateInvPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'generate-inv',
    loadChildren: () => import('./generate-inv/generate-inv.module').then( m => m.GenerateInvPageModule)
  },
  {
    path: 'inventaire-list',
    loadChildren: () => import('./inventaire-list/inventaire-list.module').then( m => m.InventaireListPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'emplacement',
    loadChildren: () => import('./emplacement/emplacement.module').then( m => m.EmplacementPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
