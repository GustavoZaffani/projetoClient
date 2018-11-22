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

@Component({
  selector: 'app-form-venda',
  templateUrl: './venda.form.component.html',
  styleUrls: ['./venda.form.component.css']
})

export class VendaFormComponent implements OnInit {

  veiculosList: Compra[];
  vendedorList: Pessoa[];
  clienteList: Pessoa[];
  pessoas: Pessoa[];
  validateForm = false;
  qtdeDisponivel: number;
  mostraQtdeDisponivel = false;
  display: boolean;

  @Input() venda: Venda;
  @ViewChild('form') form: NgForm;
  @Output() onCancel = new EventEmitter<void>();

  showDialog() {
    this.display = true;
  }

  constructor(private route: Router,
              private pessoaService: PessoaService,
              private vendaService: VendaService,
              private compraService: CompraService) {
  }

  ngOnInit(): void {
    this.venda = new Venda();
  }

  calculaTotalProduto(event) {
    console.log('entrou');
    if (this.venda.veiculo) {
      if (this.venda.desconto) {
        this.venda.vlrTotal = (this.venda.qtde * this.venda.vlrUnitario) * this.venda.desconto;
      } else {
        this.venda.vlrTotal = this.venda.qtde * this.venda.vlrUnitario;
      }
    } else {
      console.log('Vazio');
    }
  }
  preencheValor() {
    this.venda.vlrUnitario = this.venda.veiculo.precoVenda;
    this.qtdeDisponivel = this.venda.veiculo.qtde;
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
      console.log('Passou pela validação!');
    } else {
      this.validateForm = true;
      console.log('Não passou pela validação!');
    }
  }
  inserirTable() {

  }
}
