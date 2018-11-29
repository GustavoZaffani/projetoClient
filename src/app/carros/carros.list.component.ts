import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {Compra} from '../compra/compra';
import {CompraService} from '../compra/compra.service';

@Component({
  selector: 'app-carros-list',
  templateUrl: './carros.list.component.html',
  styleUrls: ['./carros.list.component.css']
})
export class CarrosListComponent implements OnInit {

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
      {field: 'precoVenda', header: 'Preço de Venda'},
    ];
  }

  ngOnInit(): void {
    this.atualizaTabela();
  }

  novaCompra() {
    this.router.navigate(['compras/form']);
  }

  excluir (id: number) {
    this.confirmationService.confirm( {
      message: 'Tem certeza que deseja excluir esse registro?',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      header: 'Confirmação',
      accept: () => {
        this.service.excluir(id)
          .subscribe(e => {
            this.atualizaTabela();
            this.messageService.add({severity: 'success', detail: 'Registro excluído com sucesso!'});
          }, error => {
            this.messageService.add({severity: 'error', detail: 'Não foi possível excluir o registro!'});
          });
      }
    });
  }

  editar(id: number) {
    this.router.navigate(['compras/form', id]);
  }

  atualizaTabela() {
    this.service.findAllDisponiveis()
      .subscribe(e => this.compras = e);
  }
}
