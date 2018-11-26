import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Relatorio} from "./relatorio";

@Injectable()
export class RelatorioService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api_url + 'relatorio';
  }

  findOne(id: number): Observable<Relatorio> {
    return this.http.get<Relatorio> (this.url + '/' + id);
  }

  findAll(): Observable<Relatorio[]> {
    return this.http.get<Relatorio[]> (this.url);
  }
}
