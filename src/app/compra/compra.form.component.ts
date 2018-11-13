import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Compra} from './compra';

@Component({
  selector: 'app-compra-form',
  templateUrl: './compra.form.component.html',
  styleUrls: ['./compra.form.component.css']
})
export class CompraFormComponent implements OnInit {

  compra: Compra;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  voltar () {
    this.route.navigate(['/compras']);
  }
/*
  salvar() {
    this.service.save(this.compra)
      .subscribe(e => {
        this.compra = e;
      });
  }*/
}
