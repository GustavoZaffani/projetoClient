import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VendaListComponent} from './venda.list.component';
import {VendaFormComponent} from './venda.form.component';
import {CardModule} from 'primeng/card';
import {AutoCompleteModule, ButtonModule, DialogModule, TooltipModule} from 'primeng/primeng';
import {ToolbarrModule} from '../toolbar/toolbar.module';

@NgModule ({
  imports: [
    CommonModule,
    CardModule,
    TooltipModule,
    AutoCompleteModule,
    DialogModule,
    ButtonModule,
    ToolbarrModule
  ],
  declarations: [
    VendaListComponent,
    VendaFormComponent
  ],
  exports: [
    VendaListComponent,
    VendaFormComponent
  ]
})

export class VendaModule {}
