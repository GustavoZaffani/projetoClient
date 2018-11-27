import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Compra} from './compra';
import {CompraService} from './compra.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Pessoa} from '../pessoa/pessoa';
import {PessoaService} from '../pessoa/pessoa.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-compra-form',
  templateUrl: './compra.form.component.html',
  styleUrls: ['./compra.form.component.css']
})
export class CompraFormComponent implements OnInit {

  compra: Compra;
  fornecedorList: Pessoa[];
  validateForm = false;

  @ViewChild('form') form: NgForm;

  constructor(private router: Router,
              private service: CompraService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private confirmationService: ConfirmationService,
              private pessoaService:  PessoaService) { }

  ngOnInit() {
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
    if (this.form.valid) {
      this.calculoLucro(this.compra.precoVenda, this.compra.precoCusto);
      this.service.save(this.compra)
        .subscribe(e => {
          this.compra = e;
          this.messageService.add({severity: 'success', detail: 'Cadastro salvo com sucesso!'});
          setTimeout(() => {
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
                }, 1200);
              }
            });
          }, 1500);
        });
    } else {
      this.validateForm = true;
    }
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
