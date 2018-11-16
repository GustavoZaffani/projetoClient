import {Pessoa} from '../pessoa/pessoa';
import {Compra} from '../compra/compra';

export class Vendas {

  id: number;
  cliente: Pessoa;
  vendedor: Pessoa;
  veiculo: Compra;
  qtde: number;
  vlrUnitario: number;
  desconto: number;
  vlrTotal: number;
  dataVenda: number;
}
