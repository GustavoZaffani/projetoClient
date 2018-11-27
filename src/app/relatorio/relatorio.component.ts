import {Component, OnInit} from '@angular/core';
import {Relatorio} from "./relatorio";
import {RelatorioService} from "./relatorio.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  cols: any[];
  relatorios: Relatorio[];
  despesas: number;
  vendas: number;
  resultadoFinal: number;

  constructor(private service: RelatorioService,
              private route: Router) {

    this.cols = [
      {field: 'id', header: "Código"},
      {field: 'tipo', header: "Categoria"},
      {field: 'vlr', header: "Valor"},
      {field: 'data', header: "Data"}
    ];
  }

  ngOnInit() {
    this.atualizaTabela();
  }


  calcularFinanceiro() {

    this.relatorios.forEach(relatorio => {
      if (relatorio.tipo == 'C') {
        if (!this.despesas) {
          this.despesas = 0;
        }
        this.despesas += relatorio.vlr;
      } else {
        if (!this.vendas) {
          this.vendas = 0;
        }
        this.vendas += relatorio.vlr;
      }
    });
    this.resultadoFinal = this.vendas - this.despesas;
  }

  visualizarDados(id: number, tipo: string) {
    if (tipo == 'C') {
      this.route.navigate(['/compras/form', id]);
    } else {
      this.route.navigate(['/vendas/form', id]);
    }
  }

  atualizaTabela() {
    this.service.findAll()
      .subscribe(e => {
        this.relatorios = e;
        this.calcularFinanceiro();
      });
  }
}
