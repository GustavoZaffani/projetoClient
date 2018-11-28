export class Relatorio {

  id: number;
  valor: number;
  tipo: string;
  data: string;

  constructor(id: number, valor: number, tipo: string, data: string) {
    this.id = id;
    this.valor = valor;
    this.tipo = tipo;
    this.data = data;
  }
}
