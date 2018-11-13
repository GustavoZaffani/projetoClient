import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pessoa} from './pessoa';

@Injectable()
export class PessoaService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/pessoa';
  }

  findOne(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.url + '/' + id);
  }

  findAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url);
  }

  save(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.url, Pessoa);
  }

  excluir(pessoa: Pessoa): Observable<Pessoa[]> {
    return this.http.post<Pessoa[]>(this.url + '/excluir', pessoa);
  }
}
