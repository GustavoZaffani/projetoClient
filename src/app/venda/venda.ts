import {Pessoa} from '../pessoa/pessoa';
import {VendaItem} from "./vendaItem";

export class Venda {

  id: number;
  cliente: Pessoa;
  vendedor: Pessoa;
  itens: VendaItem[];
  qtde: number;
  vlrTotal: number;
  vlrFinal: number;
  dataVenda: number;
}
