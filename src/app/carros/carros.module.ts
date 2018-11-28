import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarrosListComponent} from './carros.list.component';
import {CardModule} from 'primeng/card';
import {AutoCompleteModule, ButtonModule, CalendarModule, InputMaskModule, TooltipModule} from 'primeng/primeng';
import {ToolbarrModule} from '../toolbar/toolbar.module';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CompraService} from '../compra/compra.service';
import {CurrencyFormatPipeModule} from "../pipe/currencyFormat/currencyFormat.pipe.module";

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
    CurrencyFormatPipeModule
  ],
  declarations: [
    CarrosListComponent
  ],
  exports: [
    CarrosListComponent
  ],
  providers: [
    CompraService
  ]
})
export class CarrosModule {}
