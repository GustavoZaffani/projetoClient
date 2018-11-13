import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PessoaService} from './pessoa.service';
import {Pessoa} from './pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.form.component.html',
  styleUrls: ['./pessoa.form.component.css']
})
export class PessoaFormComponent implements OnInit {

  pessoa: Pessoa;

  constructor(private route: Router,
              private service: PessoaService) {}

  ngOnInit() {
  }

  salvar() {
    this.service.save(this.pessoa)
      .subscribe(e => {
        this.pessoa = e;
      });
  }

  voltar(){
    this.route.navigate(['/pessoas']);
  }

}
