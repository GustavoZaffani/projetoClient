import {Pessoa} from '../pessoa/pessoa';

export class Compra {

  id: number;
  marca: string;
  modelo: string;
  anoFabricacao: number;
  anoModelo: number;
  cor: string;
  combustivel: string;
  tipo: string;
  categoria: string;
  chassi: string;
  placa: string;
  dataCompra: string;
  km: number;
  precoCusto: number;
  precoVenda: number;
  lucro: number;
  qtde: number;
  fornecedor: Pessoa;
  vlrTotal: number;
}
