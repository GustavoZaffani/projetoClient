import {Component, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
}
