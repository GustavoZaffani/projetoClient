import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Pipe({name: 'moeda'})

export class MoedaPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  transform(value: number, info: string = "0.2-2"): any {
    if (value) {
      const pipe = new DecimalPipe (this.locale);
      const novo_valor = pipe.transform(value, info);
      return 'R$ ' + novo_valor;
    }
  }
}
