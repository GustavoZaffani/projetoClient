import { Component, OnInit } from '@angular/core';
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
  relatorio: Relatorio[];

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

  visualizarDados(id: number){
    this.route.navigate(['/compras/form', id]);
  }

  atualizaTabela() {
    this.service.findAll()
      .subscribe(e => {
        this.relatorio = e;
      })

  }
}
