import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventaireListPageRoutingModule } from './inventaire-list-routing.module';

import { InventaireListPage } from './inventaire-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventaireListPageRoutingModule
  ],
  declarations: [InventaireListPage]
})
export class InventaireListPageModule {}
