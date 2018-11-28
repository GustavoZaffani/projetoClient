import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RelatorioComponent} from "./relatorio.component";
import {ToolbarrModule} from "../toolbar/toolbar.module";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/primeng";
import {CompraService} from "../compra/compra.service";
import {VendaService} from "../venda/venda.service";
import {CurrencyFormatPipeModule} from "../pipe/currencyFormat/currencyFormat.pipe.module";

@NgModule({
  imports: [
    CommonModule,
    ToolbarrModule,
    CardModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    CurrencyFormatPipeModule,
    TooltipModule
  ],
  declarations: [
    RelatorioComponent
  ],
  exports: [
    RelatorioComponent
  ],
  providers: [
    CompraService,
    VendaService
  ]
})
export class RelatorioModule {

}
