import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataPipe} from './data.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DataPipe
  ],
  exports: [
    DataPipe
  ]
})
export class DataPipeModule {}
