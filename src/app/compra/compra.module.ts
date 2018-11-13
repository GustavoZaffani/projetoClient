import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompraFormComponent} from './compra.form.component';
import {CompraListComponent} from './compra.list.component';
import {CardModule} from 'primeng/card';
import {ButtonModule, CalendarModule, InputMaskModule, TooltipModule} from 'primeng/primeng';
import {ToolbarrModule} from '../toolbar/toolbar.module';
import {TableModule} from 'primeng/table';
import {CompraService} from './compra.service';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    CalendarModule,
    InputMaskModule,
    TooltipModule,
    ButtonModule,
    ToolbarrModule,
    TableModule
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
