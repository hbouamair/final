import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateInvPage } from './generate-inv.page';

const routes: Routes = [
  {
    path: '',
    component: GenerateInvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerateInvPageRoutingModule {}
