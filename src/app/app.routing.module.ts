import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {VendaFormComponent} from './venda/venda.form.component';
import {HomeComponent} from './home/home.component';
import {CompraFormComponent} from './compra/compra.form.component';
import {PessoaListComponent} from './pessoa/pessoa.list.component';
import {PessoaFormComponent} from './pessoa/pessoa.form.component';
import {CompraListComponent} from './compra/compra.list.component';
import {VendaListComponent} from './venda/venda.list.component';
import {CarrosListComponent} from './carros/carros.list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'compras', component: CompraListComponent},
  {path: 'compras/form', component: CompraFormComponent},
  {path: 'compras/form/:id', component: CompraFormComponent},
  {path: 'vendas', component: VendaListComponent},
  {path: 'vendas/form', component: VendaFormComponent},
  {path: 'pessoas', component: PessoaListComponent},
  {path: 'pessoas/form', component: PessoaFormComponent},
  {path: 'pessoas/form/:id', component: PessoaFormComponent},
  {path: 'carros', component: CarrosListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
