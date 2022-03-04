import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateInvPage } from './create-inv.page';

const routes: Routes = [
  {
    path: '',
    component: CreateInvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateInvPageRoutingModule {}
