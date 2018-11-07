import {NgModule} from '@angular/core';
import {SidenavComponent} from './sidenav.component';
import {CommonModule} from '@angular/common';
import {AccordionModule, ButtonModule, SidebarModule, ToolbarModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    SidebarModule,
    ToolbarModule,
    ButtonModule
  ],
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ],
  providers: []
})
export class SidenavModule { }
