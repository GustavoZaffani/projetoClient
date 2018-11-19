import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pessoa} from './pessoa';
import {environment} from '../../environments/environment';

@Injectable()
export class PessoaService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api_url + 'pessoa';
  }

  findOne(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.url + '/' + id);
  }

  findAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url);
  }

  save(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.url, pessoa);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`);
  }

  complete(query: string, categoria: string): Observable<Pessoa[]> {
    const url = this.url + `/complete?query=${query}&categoria=${categoria}`;
    return this.http.get<Pessoa[]>(url);
  }
}
