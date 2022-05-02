import { PoTemplatesModule } from '@po-ui/ng-templates';
import { HomePageModule } from './../../home/home.module';
import { MenuDynamicComponent } from './../../shared/menu-dynamic/menu-dynamic.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateImagensRoutingModule } from './generate-imagens-routing.module';
import { PoComponentsModule, PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GenerateImagensRoutingModule,
  ]
})
export class GenerateImagensModule { }
