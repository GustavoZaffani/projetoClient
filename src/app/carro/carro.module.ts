import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarroFormComponent} from './carro.form.component';
import {CarroListComponent} from './carro.list.component';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    CardModule
  ],
  declarations: [
    CarroFormComponent,
    CarroListComponent
  ],
  exports: [
    CarroFormComponent,
    CarroListComponent
  ]
})
export class CarroModule {}
