import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {VendaFormComponent} from './venda/venda.form.component';
import {HomeComponent} from './home/home.component';
import {VendaListComponent} from './venda/venda.list.component';
import {CarrosListComponent} from './carros/carros.list.component';
import {RelatorioComponent} from "./relatorio/relatorio.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'compra', loadChildren: './compra/compra.module#CompraModule'},
  {path: 'pessoa', loadChildren: './pessoa/pessoa.module#PessoaModule'},
  {path: 'vendas', component: VendaListComponent},
  {path: 'vendas/form', component: VendaFormComponent},
  {path: 'vendas/form/:id', component: VendaFormComponent},
  {path: 'carros', component: CarrosListComponent},
  {path: 'relatorio', component: RelatorioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


