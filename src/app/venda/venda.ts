import {Pessoa} from '../pessoa/pessoa';
import {Compra} from '../compra/compra';

export class Venda {

  id: number;
  cliente: Pessoa;
  vendedor: Pessoa;
  veiculo: Compra;
  qtde: number;
  vlrUnitario: number;
  desconto: number;
  vlrTotal: number;
  vlrFinal: number;
  dataVenda: number;
}
