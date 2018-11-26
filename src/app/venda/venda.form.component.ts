import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Pessoa} from '../pessoa/pessoa';
import {Venda} from './venda';
import {VendaService} from './venda.service';
import {PessoaService} from '../pessoa/pessoa.service';
import {CompraService} from '../compra/compra.service';
import {Compra} from '../compra/compra';
import {NgForm} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {VendaItem} from "./vendaItem";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-form-venda',
  templateUrl: './venda.form.component.html',
  styleUrls: ['./venda.form.component.css']
})

export class VendaFormComponent {

  veiculosList: Compra[];
  vendedorList: Pessoa[];
  clienteList: Pessoa[];
  pessoas: Pessoa[];
  validateForm = false;
  qtdeDisponivel: number;
  mostraQtdeDisponivel = false;
  display: boolean;
  vendaItemToAdd: VendaItem;
  totalItens: number;
  venda: Venda;

  @ViewChild('form') form: NgForm;
  @Output() onCancel = new EventEmitter<void>();

  showDialog() {
    this.vendaItemToAdd = new VendaItem();
    this.display = true;
  }

  constructor(private route: Router,
              private pessoaService: PessoaService,
              private vendaService: VendaService,
              private compraService: CompraService,
              private messageService: MessageService) {
    this.venda = new Venda();
  }

  calculaTotalProduto(event) {
    if (this.vendaItemToAdd) {
      if (this.vendaItemToAdd.desconto) {
        this.vendaItemToAdd.valorTotal = (this.vendaItemToAdd.quantidade * this.vendaItemToAdd.valorUnitario)
            - ((this.vendaItemToAdd.quantidade * this.vendaItemToAdd.valorUnitario) * (this.vendaItemToAdd.desconto / 100));
      } else {
        this.vendaItemToAdd.valorTotal = this.vendaItemToAdd.quantidade * this.vendaItemToAdd.valorUnitario;
      }
    } else {
      console.log('Vazio');
    }
  }

  preencheValor() {
    this.vendaItemToAdd.valorUnitario = this.vendaItemToAdd.veiculo.precoVenda;
    this.qtdeDisponivel = this.vendaItemToAdd.quantidade;
    this.mostraQtdeDisponivel = true;
  }

  voltar() {
    this.route.navigate(['/vendas']);
  }

  fechar(): void {
    // TODO escontrar uma forma de fechar o modal
  }

  findClientes($event) {
    this.pessoaService.complete($event.query, 'C')
      .subscribe(e => {
        this.clienteList = e;
      });
  }

  findVendedor($event) {
    this.pessoaService.complete($event.query, 'V')
      .subscribe(e => {
        this.vendedorList = e;
      });
  }

  findVeiculos($event) {
    this.compraService.complete($event.query)
      .subscribe(e => {
        this.veiculosList = e;
      });
  }

  finalizarVenda() {
    if (this.form.valid) {
      this.vendaService.save(this.venda)
        .subscribe(e => {
          this.venda = e;
          this.messageService.add({severity: 'sucess', detail: 'Venda realizada com sucesso!'});
        })
    } else {
      this.validateForm = true;
      console.log('Não passou pela validação!');
    }
  }
  inserirTable() {
    if (!this.venda.itens){
      this.venda.itens = [];
    }
    this.venda.itens.push(this.vendaItemToAdd);
    this.display = false;
    this.totalItens = this.totalItens + this.vendaItemToAdd.valorTotal;
    console.log(this.totalItens);
    this.mostraQtdeDisponivel = false;
  }
}
