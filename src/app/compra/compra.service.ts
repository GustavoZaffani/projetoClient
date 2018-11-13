import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Compra} from './compra';

@Injectable()
export class CompraService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://192.168.88.26:8085/compras';
  }

  findOne(id: number): Observable<Compra> {
    return this.http.get<Compra>(this.url + '/' + id);
  }

  findAll(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.url);
  }

  save(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(this.url, compra);
  }

  excluir(compra: Compra): Observable<Compra[]> {
    return this.http.post<Compra[]>(this.url + '/excluir', compra);
  }
}
