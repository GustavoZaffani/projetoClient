import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PessoaListComponent} from './pessoa.list.component';
import {PessoaFormComponent} from './pessoa.form.component';

const routes: Routes = [

  {path: 'pessoas', component: PessoaListComponent},
  {path: 'pessoas/form', component: PessoaFormComponent},
  {path: 'pessoas/form/:id', component: PessoaFormComponent},

];
export const PessoaRouting: ModuleWithProviders = RouterModule.forChild(routes);
