import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Venda} from './venda';
import {Pessoa} from '../pessoa/pessoa';
import {Injectable} from '@angular/core';

@Injectable()
export class VendaService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api_url + 'venda';
  }

  findOne(id: number): Observable<Venda> {
    return this.http.get<Venda>(this.url + '/' + id);
  }

  findAll(): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.url);
  }

  save(venda: Venda): Observable<Venda> {
    return this.http.post<Venda>(this.url, venda);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`);
  }

  findClientesComplete(query: any): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url + `/find-clientes-complete?query=${query}`);
  }
}
