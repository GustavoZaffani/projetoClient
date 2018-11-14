import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'moeda'})

export class MoedaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
  }
}
