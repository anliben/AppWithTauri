import { MenuDynamicComponent } from './../shared/menu-dynamic/menu-dynamic.component';
import { PoComponentsModule, PoModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PoModule, PoComponentsModule
  ],
  declarations: [HomePage, MenuDynamicComponent]
})
export class HomePageModule {}
