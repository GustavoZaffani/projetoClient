import {Component, OnInit} from '@angular/core';
import {PessoaService} from './pessoa.service';
import {Pessoa} from './pessoa';

@Component ({

  selector: 'app-list-pessoa',
  templateUrl: './pessoa.list.component.html',
  styleUrls: ['./pessoa.list.component.css']

})

export class PessoaListComponent implements OnInit{

  pessoa: Pessoa;
  pessoas: Pessoa[];

  constructor(private service: PessoaService) {}

  ngOnInit(): void {
    this.service.findAll()
      .subscribe(e => this.pessoas = e);
  }
}
