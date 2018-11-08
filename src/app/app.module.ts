import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SidenavModule} from './sidenav/sidenav.module';
import {ToolbarrModule} from './toolbar/toolbar.module';
import {CarroModule} from './carro/carro.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from './home/home.module';
import { VendaListComponent } from './venda/venda.list.component';
import {VendaModule} from './venda/venda.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidenavModule,
    ToolbarrModule,
    CarroModule,
    HomeModule,
    VendaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
