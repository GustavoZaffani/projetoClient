import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompraFormComponent} from './compra.form.component';
import {CompraListComponent} from './compra.list.component';
import {CardModule} from 'primeng/card';
import {AutoCompleteModule, ButtonModule, CalendarModule, InputMaskModule, TooltipModule} from 'primeng/primeng';
import {ToolbarrModule} from '../toolbar/toolbar.module';
import {TableModule} from 'primeng/table';
import {CompraService} from './compra.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule ({
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    CalendarModule,
    InputMaskModule,
    TooltipModule,
    ButtonModule,
    ToolbarrModule,
    TableModule,
    HttpClientModule,
    AutoCompleteModule
  ],
  declarations: [
    CompraFormComponent,
    CompraListComponent
  ],
  exports: [
    CompraFormComponent,
    CompraListComponent
  ],
  providers: [
    CompraService
  ]
})
export class CompraModule {}
