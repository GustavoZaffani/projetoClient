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
      {field: 'fornecedor', header: 'Fornecedor'},
      {field: 'marca', header: 'Marca'},
      {field: 'modelo', header: 'Modelo'},
      {field: 'vlr_total', header: 'Vlr Compra'}
    ];
  }

  ngOnInit(): void {
    this.atualizaTabela();
  }

  excluir (id: number) {
    this.confirmationService.confirm( {
      message: 'Tem certeza que deseja excluir esse registro?',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
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

  novoCadastro() {
    this.router.navigate(['compras/form']);
  }

  editar(id: number) {
    this.router.navigate(['compras/form', id]);
  }

  atualizaTabela() {
    this.service.findAll()
      .subscribe(e => this.compras = e);
  }
}
