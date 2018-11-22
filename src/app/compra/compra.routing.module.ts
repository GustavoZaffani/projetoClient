import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompraFormComponent} from './compra.form.component';
import {CompraListComponent} from './compra.list.component';

const routes: Routes = [

    {path: 'compras', component: CompraListComponent},
    {path: 'compras/form', component: CompraFormComponent},
    {path: 'compras/form/:id', component: CompraFormComponent}

];

export const CompraRouting: ModuleWithProviders = RouterModule.forChild(routes);
