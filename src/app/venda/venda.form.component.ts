import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component ({
  selector: 'app-form-venda',
  templateUrl: './venda.form.component.html',
  styleUrls: ['./venda.form.component.css']
})


export class VendaFormComponent implements OnInit {

  display: boolean;

  showDialog() {
    this.display = true;
  }

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.route.navigate(['/vendas']);
  }
}
