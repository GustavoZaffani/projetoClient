import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/api';
import {VendaService} from './venda.service';
import {Venda} from './venda';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.list.component.html',
  styleUrls: ['./venda.list.component.css']
})
export class VendaListComponent implements OnInit {

  vendas: Venda[];
  cols: any[];

  constructor(private router: Router,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private service: VendaService) {

    this.cols = [
      {field: 'id', header: 'Código'},
      {field: 'id_cliente', header: 'Cliente'},
      {field: 'id_vendedor', header: 'Vendedor'},
      {field: 'vlr_total', header: 'Vlr da Venda'}
    ];
  }

  ngOnInit() {
    this.atualizarTabela();
  }

  novaVenda() {
    this.router.navigate(['vendas/form']);
  }

  editar(id: number) {
    // TODO implementar o método em questão.
  }

  excluir(id: number) {
    // TODO implementar o método em questão.
  }

  atualizarTabela() {
    this.service.findAll()
      .subscribe(e => {
          this.vendas = e;
        });
  }
}
