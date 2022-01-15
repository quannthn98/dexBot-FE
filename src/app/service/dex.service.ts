import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Dex} from '../entity/dex';
import {Network} from '../entity/network';

const API_URL = `${environment.API_URL}/dex`;

@Injectable({
  providedIn: 'root'
})
export class DexService {
  dexList: Dex[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Dex[]> {
    return this.httpClient.get<Dex[]>(`${API_URL}`);
  }

  getById(id: number): Observable<Dex> {
    return this.httpClient.get<Dex>(`${API_URL}/${id}`);
  }

  getByNetwork(networkId: number): Observable<Dex[]> {
    return this.httpClient.get<Dex[]>(`${API_URL}/network/${networkId}`);
  }

  addNew(dex: Dex): Observable<Dex> {
    return this.httpClient.post<Dex>(`${API_URL}`, dex);
  }
}
