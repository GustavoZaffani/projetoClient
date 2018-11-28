import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {VendaService} from "../venda/venda.service";
import {CompraService} from "../compra/compra.service";
import {Venda} from "../venda/venda";
import {Compra} from "../compra/compra";
import {Relatorio} from "./relatorio";

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  cols: any[];
  vendas: Venda[];
  compras: Compra[];
  relatorio: Relatorio[] = [];

  totalDespesas: number;
  totalVendas: number;
  resultadoFinal: number;

  constructor(private vendaService: VendaService,
              private compraService: CompraService,
              private route: Router) {

    this.cols = [
      {field: 'id', header: "Código"},
      {field: 'tipo', header: "Categoria"},
      {field: 'valor', header: "Valor"},
      {field: 'data', header: "Data"}
    ];
  }

  ngOnInit() {
    this.atualizaTabelas();
  }

  calcularVendas() {
    this.vendas.forEach( venda => {
      if (!this.totalVendas) {
        this.totalVendas = 0;
      }
      this.totalVendas += venda.vlrTotal;
    });
  }
  calcularCompras() {

    this.compras.forEach(compra => {

      if (!this.totalDespesas) {
        this.totalDespesas = 0;
      }
      this.totalDespesas += compra.precoCusto;
    });
  }

  visualizarDados(id: number, tipo: string) {
    if (tipo == 'C') {
      this.route.navigate(['/compras/form', id]);
    } else {
      this.route.navigate(['/vendas/form', id]);
    }
  }

  atualizaTabelas() {
    this.compraService.findAll().subscribe(compras => {
      this.compras = compras;

      this.vendaService.findAll().subscribe(vendas => {
        this.vendas = vendas;

        this.montaRelatorio();
      });
    });
  }

  montaRelatorio(){

    this.compras.forEach(compra => {
        this.relatorio.push(new Relatorio(compra.id, compra.precoCusto, "C", compra.dataCompra));
    });

    this.vendas.forEach(venda => {
      this.relatorio.push(new Relatorio(venda.id, venda.vlrTotal, "V", venda.dataVenda));
    });

    this.calcularVendas();
    this.calcularCompras();
    this.resultadoFinal = this.totalVendas - this.totalDespesas;
  }
}
