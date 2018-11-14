import {Component, OnInit} from '@angular/core';
import {CompraService} from './compra.service';
import {Compra} from './compra';

@Component({
  selector: 'app-compra-list',
  templateUrl: './compra.list.component.html',
  styleUrls: ['./compra.list.component.css']
})
export class CompraListComponent implements OnInit {

  compras: Compra[];

  constructor (private service: CompraService) {}

  ngOnInit(): void {
    this.service.findAll()
      .subscribe(e => this.compras = e);
  }
}
