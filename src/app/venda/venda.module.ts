import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VendaListComponent} from './venda.list.component';
import {VendaFormComponent} from './venda.form.component';
import {CardModule} from 'primeng/card';
import {AutoCompleteModule, DialogModule, TooltipModule} from 'primeng/primeng';

@NgModule ({
  imports: [
    CommonModule,
    CardModule,
    TooltipModule,
    AutoCompleteModule,
    DialogModule
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
