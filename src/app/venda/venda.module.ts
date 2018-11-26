import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VendaListComponent} from './venda.list.component';
import {VendaFormComponent} from './venda.form.component';
import {CardModule} from 'primeng/card';
import {AutoCompleteModule, ButtonModule, ConfirmationService, DialogModule, TooltipModule} from 'primeng/primeng';
import {ToolbarrModule} from '../toolbar/toolbar.module';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {VendaService} from './venda.service';
import {PessoaService} from '../pessoa/pessoa.service';
import {HttpClientModule} from '@angular/common/http';
import {CompraService} from '../compra/compra.service';
import {MoedaPipeModule} from "../pipe/moeda/moeda.pipe.module";

@NgModule ({
  imports: [
    CommonModule,
    CardModule,
    TooltipModule,
    AutoCompleteModule,
    DialogModule,
    ButtonModule,
    ToolbarrModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    MoedaPipeModule
  ],
  declarations: [
    VendaListComponent,
    VendaFormComponent
  ],
  exports: [
    VendaListComponent,
    VendaFormComponent
  ],
  providers: [
    VendaService,
    PessoaService,
    CompraService
  ]
})

export class VendaModule {}
