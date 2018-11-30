import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PessoaService} from './pessoa.service';
import {Pessoa} from './pessoa';
import {ConfirmationService, MessageService} from 'primeng/api';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.form.component.html',
  styleUrls: ['./pessoa.form.component.css']
})
export class PessoaFormComponent implements OnInit {

  pessoa: Pessoa;
  validateForm = false;
  update = false;

  @ViewChild('form') form: NgForm;

  constructor(private router: Router,
              private service: PessoaService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    // TODO depois tem que carregar do banco se tiver parametro na url

    this.pessoa = new Pessoa();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.update = true;
        this.service.findOne(params['id'])
          .subscribe(e => {
            this.pessoa = e;
          });
      }
    });
  }

  salvar() {
    if (this.form.valid) {
      this.service.save(this.pessoa)
        .subscribe(e => {
          this.pessoa = e;
          if(this.update) {
            this.messageService.add({severity: 'success', detail: 'Cadastro atualizado com sucesso!'});
            setTimeout(() => this.voltar(), 1500);
          } else {
            this.messageService.add({severity: 'success', detail: 'Cadastro salvo com sucesso!'});
            setTimeout(() => {
              this.confirmationService.confirm({
                message: 'Gostaria de fazer um novo cadastro?',
                acceptLabel: 'Sim',
                rejectLabel: 'Não',
                header: 'Confirmação',
                accept: () => {
                  this.pessoa = new Pessoa();
                },
                reject: () => {
                  setTimeout(() => this.voltar(), 1500);
                }
              });
            }, 1200);
          }
        });
    } else {
      this.validateForm = true;
      this.messageService.add({severity: 'warn', summary: 'Necessário preencher todos os campos obrigatórios!'});
    }
  }

  voltar() {
    window.history.back();
  }
}
