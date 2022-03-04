import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerateInvPageRoutingModule } from './generate-inv-routing.module';

import { GenerateInvPage } from './generate-inv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerateInvPageRoutingModule
  ],
  declarations: [GenerateInvPage]
})
export class GenerateInvPageModule {}
