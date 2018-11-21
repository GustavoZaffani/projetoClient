import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
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
  venda: Venda;
  pessoas: Pessoa[];
  validateForm = false;

  @ViewChild('form') form: NgForm;


  display: boolean;
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
}
