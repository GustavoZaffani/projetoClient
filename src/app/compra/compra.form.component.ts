import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Compra} from './compra';
import {CompraService} from './compra.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Pessoa} from '../pessoa/pessoa';
import {PessoaService} from '../pessoa/pessoa.service';

@Component({
  selector: 'app-compra-form',
  templateUrl: './compra.form.component.html',
  styleUrls: ['./compra.form.component.css']
})
export class CompraFormComponent implements OnInit {

  compra: Compra;
  fornecedorList: Pessoa[];

  constructor(private router: Router,
              private service: CompraService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private confirmationService: ConfirmationService,
              private pessoaService:  PessoaService) { }

  ngOnInit() {
    //TODO necessário quando trabalhar com a edição
    this.compra = new Compra();

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.service.findOne(params['id'])
          .subscribe(e => {
            this.compra = e;
          });
      }
    });
  }

  voltar() {
    this.router.navigate(['/compras']);
  }

  salvar() {
    console.log(this.compra);
    this.calculoLucro(this.compra.precoVenda, this.compra.precoCusto);
    console.log(this.compra);
    this.service.save(this.compra)
      .subscribe(e => {
        this.compra = e;
        this.messageService.add({severity: 'SUCCESS', detail: 'Cadastro salvo com sucesso!'});
        this.confirmationService.confirm({
          message: 'Gostaria de fazer um novo cadastro?',
          acceptLabel: 'Sim',
          rejectLabel: 'Não',
          accept: () => {
            this.compra = new Compra();
          },
          reject: () => {
            setTimeout(() => {
              this.voltar();
            }, 1500);
          }
        });
      });
  }

  calculoLucro(venda: number, custo: number) {
    this.compra.lucro = venda - custo;
  }

  findFornecedor($event) {
    this.pessoaService.complete($event.query, 'F')
      .subscribe(e => {
        this.fornecedorList = e;
      });
  }
}
