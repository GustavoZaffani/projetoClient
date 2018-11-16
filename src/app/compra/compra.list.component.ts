import {Component, OnInit} from '@angular/core';
import {CompraService} from './compra.service';
import {Compra} from './compra';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compra-list',
  templateUrl: './compra.list.component.html',
  styleUrls: ['./compra.list.component.css']
})
export class CompraListComponent implements OnInit {

  compras: Compra[];
  cols: any[];

  constructor (private service: CompraService,
               private confirmationService: ConfirmationService,
               private messageService: MessageService,
               private router: Router) {

    this.cols = [
      {field: 'id', header: 'Código'},
      {field: 'tipo', header: 'Tipo'},
      {field: 'marca', header: 'Marca'},
      {field: 'modelo', header: 'Modelo'},
      {field: 'anoFabricacao', header: 'Ano de Fabricação'},
      {field: 'precoCusto', header: 'Preço de Custo'},
      {field: 'precoVenda', header: 'Preço de Venda'},
      {field: 'qtde', header: 'Qtde em Estoque'}
    ];
  }

  ngOnInit(): void {
    this.service.findAll()
      .subscribe(e => this.compras = e);
  }

  excluir (compra: Compra) {
    this.confirmationService.confirm( {
      message: 'Tem certeza que deseja excluir esse registro?',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.service.excluir(compra.id)
          .subscribe(e => {
            this.compras.splice(this.compras.indexOf(compra), 1);
            this.messageService.add({severity: 'success', detail: 'Registro excluído com sucesso!'});
          }, error => {
            console.log(error);
          });
      }
    });
  }

  editar(id: number) {
    this.router.navigate(['compras/form', id]);
  }
}
