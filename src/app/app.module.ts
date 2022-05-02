import { GenerateLoremComponent } from './components/generate-lorem/generate-lorem.component';
import { GenerateImagensModule } from './components/generate-imagens/generate-imagens.module';
import { GenerateImagensComponent } from './components/generate-imagens/generate-imagens.component';
import { MenuDynamicComponent } from './shared/menu-dynamic/menu-dynamic.component';
import { HomePageModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PoComponentsModule, PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoCodeEditorModule } from '@po-ui/ng-code-editor';


@NgModule({
  declarations: [
    AppComponent,
    GenerateImagensComponent,
    GenerateLoremComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    PoModule,
    PoComponentsModule,
    FormsModule,
    HomePageModule,
    PoTemplatesModule,
    PoCodeEditorModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
