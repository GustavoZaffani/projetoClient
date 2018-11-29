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
import {ConfirmationService, MessageService} from "primeng/api";
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
  update = false;
  veiculo: Compra;

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
              private route: ActivatedRoute,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {

    this.venda = new Venda();
    this.route.params.subscribe( params => {
      if(params['id']) {
        this.update = true;
        this.vendaService.findOne(params['id'])
          .subscribe(e => {
            this.venda = e;
            this.totalItens = this.venda.vlrTotal;
          })
      }
    });
  }

  calculaTotalProduto(event) {
    if (this.vendaItemToAdd.veiculo) {
      if (this.vendaItemToAdd.desconto) {
        this.vendaItemToAdd.valorTotal = this.vendaItemToAdd.valorUnitario - ((this.vendaItemToAdd.valorUnitario) * (this.vendaItemToAdd.desconto / 100));
      } else {
        this.vendaItemToAdd.valorTotal = this.vendaItemToAdd.valorUnitario;
      }

    } else {
      this.messageService.add({severity: 'warn', summary: 'Necessário informar o veículo!'});
    }
  }

  preencheValor() {
    this.vendaItemToAdd.valorUnitario = this.vendaItemToAdd.veiculo.precoVenda;
    this.vendaItemToAdd.valorTotal = this.vendaItemToAdd.valorUnitario;
  }

  voltar() {
    window.history.back();
  }

  fecharDialog(): void {
    this.display = false;
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
    if (this.form.valid && this.venda.itens) {
      this.venda.dataVenda = moment(new Date()).format("DD/MM/YYYY");
      this.vendaService.save(this.venda)
        .subscribe(e => {
          this.venda = e;
          if(this.update) {
            this.messageService.add({severity: 'success', detail: 'Venda atualizada com sucesso!'});
            setTimeout(() => this.voltar(), 1500);
          } else {
            this.messageService.add({severity: 'success', detail: 'Venda realizada com sucesso!'});
            setTimeout(() => {
              this.confirmationService.confirm( {
                message: 'Gostaria de realizar uma nova venda?',
                acceptLabel: 'Sim',
                rejectLabel: 'Não',
                accept: () => {
                  this.venda = new Venda();
                },
                reject: () => {
                  setTimeout(() => this.voltar(), 1500);
                }
              });
            },1200);
          }
        });
      this.atualizarCarros();
    } else {
      this.validateForm = true;
      this.messageService.add({severity: 'warn', summary: 'Todos os campos devem ser preenchidos!'});
    }
  }

  inserirTable(event) {
    if(this.vendaItemToAdd.veiculo) {
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
    } else {
      this.messageService.add({severity: 'warn', summary: 'É necessário escolher um veículo!'});
    }
  }

  atualizarCarros() {
    this.venda.itens.forEach( veiculos =>{
      this.compraService.findOne(veiculos.veiculo.id)
        .subscribe(e => {
          this.veiculo = e;
          this.veiculo.vendido = true;
          this.compraService.save(this.veiculo)
            .subscribe( e => {
              this.veiculo = e;
            })
        });
    });
  }
}
