import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/api';
import {VendaService} from './venda.service';
import {Venda} from './venda';
import {Compra} from "../compra/compra";
import {VendaItem} from "./vendaItem";
import {CompraService} from "../compra/compra.service";

@Component({
  selector: 'app-venda',
  templateUrl: './venda.list.component.html',
  styleUrls: ['./venda.list.component.css']
})
export class VendaListComponent implements OnInit {

  vendas: Venda[];
  carros: VendaItem[];
  cols: any[];
  venda: Venda;
  carroRetornado: Compra;

  constructor(private router: Router,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private service: VendaService,
              private serviceCompra: CompraService) {

    this.cols = [
      {field: 'id', header: 'Código'},
      {field: 'data_venda', header: 'Data da Venda'},
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
    this.router.navigate(['vendas/form', id]);
  }

  excluir(id: number) {
    this.confirmationService.confirm( {
      message: 'Tem certeza que deseja excluir o registro?',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      header: 'Confirmação',
      accept: () => {
       this.retornaEstoque(id);
        this.service.excluir(id)
          .subscribe( e => {
            this.atualizarTabela();
            this.messageService.add({severity: 'success', detail: 'Registro excluído com sucesso!'});
          }, error => {
            console.log(error);
          });
      }
    });
  }

  atualizarTabela() {
    this.service.findAll()
      .subscribe(e => {
          this.vendas = e;
        });
  }

  retornaEstoque(id: number) {
    this.service.findOne(id)
      .subscribe(e => {
        this.venda = e;

        this.venda.itens.forEach(carros => {
          this.serviceCompra.findOne(carros.veiculo.id)
            .subscribe(e => {
              this.carroRetornado = e;
              this.carroRetornado.vendido = false;

              this.serviceCompra.save(this.carroRetornado)
                .subscribe(e => {
                  this.carroRetornado = e;
                });
            });
        });
      });
  }
}
