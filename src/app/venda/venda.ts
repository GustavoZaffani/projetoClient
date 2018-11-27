import {Pessoa} from '../pessoa/pessoa';
import {VendaItem} from "./vendaItem";

export class Venda {

  id: number;
  cliente: Pessoa;
  vendedor: Pessoa;
  itens: VendaItem[];
  vlrTotal: number;
  dataVenda: string;
}
