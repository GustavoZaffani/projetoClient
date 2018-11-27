import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pessoa} from '../pessoa/pessoa';
import {Venda} from './venda';
import {VendaService} from './venda.service';
import {PessoaService} from '../pessoa/pessoa.service';
import {CompraService} from '../compra/compra.service';
import {Compra} from '../compra/compra';
import {NgForm} from '@angular/forms';
import {VendaItem} from "./vendaItem";
import {MessageService} from "primeng/api";
import * as moment from "moment";

@Component({
  selector: 'app-form-venda',
  templateUrl: './venda.form.component.html',
  styleUrls: ['./venda.form.component.css']
})

export class VendaFormComponent implements OnInit{

  veiculosList: Compra[];
  vendedorList: Pessoa[];
  clienteList: Pessoa[];
  pessoas: Pessoa[];
  validateForm = false;
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

  constructor(private router: Router,
              private pessoaService: PessoaService,
              private vendaService: VendaService,
              private compraService: CompraService,
              private messageService: MessageService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.venda = new Venda();
    this.route.params.subscribe( params => {
      if(params['id']) {
        this.vendaService.findOne(params['id'])
          .subscribe(e => {
            this.venda = e;
          })
      }
    });
  }

  calculaTotalProduto(event) {
    if (this.vendaItemToAdd.veiculo) {
      if (this.vendaItemToAdd.desconto) {
        this.vendaItemToAdd.valorTotal = this.vendaItemToAdd.valorUnitario - ((this.vendaItemToAdd.valorUnitario) * (this.vendaItemToAdd.desconto / 100));
      } else {
        this.vendaItemToAdd.valorTotal = this.vendaItemToAdd.quantidade * this.vendaItemToAdd.valorUnitario;
      }

    } else {
      console.log('Necessário informar o veículo.');
    }
  }

  preencheValor() {
    this.vendaItemToAdd.valorUnitario = this.vendaItemToAdd.veiculo.precoVenda;
  }

  voltar() {
    this.router.navigate(['/vendas']);
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
      this.venda.dataVenda = moment(new Date()).format("DD/MM/YYYY");
      this.vendaService.save(this.venda)
        .subscribe(e => {
          this.venda = e;
          this.messageService.add({severity: 'success', detail: 'Venda realizada com sucesso!'});
          this.voltar();
        })
    } else {
      this.validateForm = true;
      console.log('Não passou pela validação!');
    }
  }
  inserirTable(event) {
    if (!this.venda.itens){
      this.venda.itens = [];
    }
    this.venda.itens.push(this.vendaItemToAdd);
    this.display = false;

    if(!this.totalItens) {
      this.totalItens = 0;
    }

    this.totalItens += this.vendaItemToAdd.valorTotal;
    this.venda.vlrTotal = this.totalItens;
  }
}
