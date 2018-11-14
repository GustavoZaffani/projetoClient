import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Compra} from './compra';
import {CompraService} from './compra.service';

@Component({
  selector: 'app-compra-form',
  templateUrl: './compra.form.component.html',
  styleUrls: ['./compra.form.component.css']
})
export class CompraFormComponent implements OnInit {

  compra: Compra;

  constructor(private route: Router,
              private service: CompraService) { }

  ngOnInit() {
    //TODO necessário quando trabalhar com a edição
    this.compra = new Compra();
  }

  voltar () {
    this.route.navigate(['/compras']);
  }

  salvar() {
    console.log(this.compra);
    this.service.save(this.compra)
      .subscribe(e => {
        this.compra = e;
      });
  }
}
