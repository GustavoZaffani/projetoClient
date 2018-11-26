import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RelatorioComponent} from "./relatorio.component";
import {ToolbarrModule} from "../toolbar/toolbar.module";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {RelatorioService} from "./relatorio.service";
import {MoedaPipeModule} from "../pipe/moeda/moeda.pipe.module";
import {TooltipModule} from "primeng/primeng";

@NgModule({
  imports: [
    CommonModule,
    ToolbarrModule,
    CardModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    MoedaPipeModule,
    TooltipModule
  ],
  declarations: [
    RelatorioComponent
  ],
  exports: [
    RelatorioComponent
  ],
  providers: [
    RelatorioService
  ]
})
export class RelatorioModule {

}
