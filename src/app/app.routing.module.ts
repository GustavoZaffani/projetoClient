import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SidenavComponent} from './sidenav/sidenav.component';

const routes: Routes = [
  {path: '', component: SidenavComponent}
];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

