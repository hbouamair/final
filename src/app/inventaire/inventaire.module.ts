import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventairePageRoutingModule } from './inventaire-routing.module';

import { InventairePage } from './inventaire.page';
import  {  CreateInvPage } from '../create-inv/create-inv.page'
import  {  GenerateInvPage } from '../generate-inv/generate-inv.page'
import {InventaireListPage} from '../inventaire-list/inventaire-list.page'
import {FooterPage} from '../footer/footer.page'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventairePageRoutingModule
  ],
  declarations: [InventairePage,CreateInvPage , GenerateInvPage,InventaireListPage,FooterPage]
})
export class InventairePageModule {}
