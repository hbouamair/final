import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateInvPageRoutingModule } from './create-inv-routing.module';

import { CreateInvPage } from './create-inv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateInvPageRoutingModule
  ],
  declarations: [CreateInvPage]
})
export class CreateInvPageModule {}
