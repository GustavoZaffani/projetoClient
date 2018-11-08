import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarroFormComponent} from './carro.form.component';
import {CarroListComponent} from './carro.list.component';
import {CardModule} from 'primeng/card';
import {CalendarModule, InputMaskModule, TooltipModule} from 'primeng/primeng';
import {ToolbarrModule} from '../toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    CalendarModule,
    InputMaskModule,
    TooltipModule
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
