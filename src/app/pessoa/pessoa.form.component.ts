import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.form.component.html',
  styleUrls: ['./pessoa.form.component.css']
})
export class PessoaFormComponent implements OnInit {

  val1: string;
  val2: string;
  constructor() { }

  ngOnInit() {
  }

}
