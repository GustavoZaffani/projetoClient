import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PessoaService} from './pessoa.service';
import {Pessoa} from './pessoa';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.form.component.html',
  styleUrls: ['./pessoa.form.component.css']
})
export class PessoaFormComponent implements OnInit {

  pessoa: Pessoa;

  constructor(private router: Router,
              private service: PessoaService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private confirmationService: ConfirmationService) {}

  ngOnInit() {
    //TODO depois tem que carregar do banco se tiver parametro na url
    this.pessoa = new Pessoa();

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.service.findOne(params['id'])
          .subscribe(e => {
            this.pessoa = e;
          });
      }
    });
  }

  salvar() {
    this.service.save(this.pessoa)
      .subscribe(e => {
        this.pessoa = e;
        this.messageService.add({severity: 'SUCCESS', detail: 'Cadastro salvo com sucesso!'});
        this.confirmationService.confirm({
          message: 'Gostaria de fazer um novo cadastro?',
          acceptLabel: 'Sim',
          rejectLabel: 'Não',
          accept: () => {
            this.pessoa = new Pessoa();
          },
          reject: () => {
            setTimeout(() => {
              this.voltar();
            }, 1500);
          }
        });
      });
  }

  voltar() {
    this.router.navigate(['/pessoas']);
  }

  clear() {
    this.pessoa = null;
    /*this.pessoa.id = '';
    this.pessoa.nome = '';
    this.pessoa.sexo = '';
    this.pessoa.estadoCivil = '';
    this.pessoa.categoria = '';
    this.pessoa.tipoPessoa = '';
    this.pessoa.cpfCnpj = '';
    this.pessoa.rg = '';
    this.pessoa.ie = '';*/

  }

}
