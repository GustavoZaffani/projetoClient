  import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompraFormComponent} from './compra.form.component';
import {CompraListComponent} from './compra.list.component';
import {CardModule} from 'primeng/card';
import {
  AutoCompleteModule,
  ButtonModule,
  CalendarModule,
  CheckboxModule,
  InputMaskModule,
  TooltipModule
} from 'primeng/primeng';
import {ToolbarrModule} from '../toolbar/toolbar.module';
import {TableModule} from 'primeng/table';
import {CompraService} from './compra.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CompraRouting} from './compra.routing.module';
import {MoedaPipeModule} from '../pipe/moeda/moeda.pipe.module';

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
    AutoCompleteModule,
    CompraRouting,
    MoedaPipeModule,
    CheckboxModule
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
