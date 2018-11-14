import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoedaPipe} from './moeda.pipe';

@NgModule ({
  imports: [
    CommonModule
  ],
  declarations: [
    MoedaPipe
  ],
  exports: [
    MoedaPipe
  ]
})
export class MoedaPipeModule {

}
