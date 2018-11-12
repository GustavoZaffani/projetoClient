import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {SidenavComponent} from './sidenav/sidenav.component';
import {VendaFormComponent} from './venda/venda.form.component';
import {HomeComponent} from './home/home.component';
import {CarroFormComponent} from './carro/carro.form.component';
import {PessoaFormComponent} from './pessoa/pessoa.form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'compras', component: CarroFormComponent},
  {path: 'vendas', component: VendaFormComponent},
  {path: 'cadastro', component: PessoaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
