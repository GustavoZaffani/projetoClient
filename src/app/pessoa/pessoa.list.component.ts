import {Component, OnInit} from '@angular/core';
import {PessoaService} from './pessoa.service';
import {Pessoa} from './pessoa';
import {ConfirmationService} from 'primeng/api';

@Component ({

  selector: 'app-list-pessoa',
  templateUrl: './pessoa.list.component.html',
  styleUrls: ['./pessoa.list.component.css']

})

export class PessoaListComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(private service: PessoaService,
              private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.service.findAll()
      .subscribe(e => {
        this.pessoas = e;
      });
  }
  excluir(pessoa: Pessoa) {
    this.confirmationService.confirm( {
      message: 'Tem certeza que deseja excluir o registro?',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.service.excluir(pessoa)
          .subscribe(e => {
            this.pessoas = e;
          }, error => {
            console.log(error);
          });
      }
    });
  }
}
