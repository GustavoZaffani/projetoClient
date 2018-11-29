import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Compra} from './compra';
import {environment} from '../../environments/environment';
import {Pessoa} from '../pessoa/pessoa';

@Injectable()
export class CompraService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api_url + 'compra';
  }

  findOne(id: number): Observable<Compra> {
    return this.http.get<Compra>(this.url + '/' + id);
  }

  findAll(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.url);
  }

  findAllDisponiveis(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.url +'/disponivel');
  }

  save(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(this.url, compra);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`);
  }

  complete(query: string): Observable<Compra[]> {
    const url = this.url + `/complete?query=${query}`;
    return this.http.get<Compra[]>(url);
  }
}
