import {Component, OnInit} from '@angular/core';
import {PessoaService} from './pessoa.service';
import {Pessoa} from './pessoa';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({

  selector: 'app-list-pessoa',
  templateUrl: './pessoa.list.component.html',
  styleUrls: ['./pessoa.list.component.css']

})

export class PessoaListComponent implements OnInit {

  pessoas: Pessoa[];
  cols: any[];

  constructor(private service: PessoaService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private router: Router) {

    this.cols = [
      { field: 'id', header: 'Código' },
      { field: 'nome', header: 'Nome' },
      { field: 'cpfCnpj', header: 'CPF/CNPJ' },
      { field: 'categoria', header: 'Categoria' }
    ];
  }

  ngOnInit(): void {
    this.atualizaTabela();
  }

  excluir(id: number) {

    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir o registro?',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      header: 'Confirmação',
      accept: () => {
        this.service.excluir(id)
          .subscribe(e => {
            this.atualizaTabela();
            this.messageService.add({severity: 'success', detail: 'Registro excluído com sucesso!'});
          }, error => {
            this.messageService.add({severity: 'error', detail: 'Não foi possível excluir esse registro! '});
          });
      }
    });
  }

  novoCadastro() {
    this.router.navigate(['pessoas/form']);
  }

  editar(id: number) {
    this.router.navigate(['pessoas/form', id]);
  }

  atualizaTabela () {
    this.service.findAll()
      .subscribe(e => {
        this.pessoas = e;
      });
  }

}
