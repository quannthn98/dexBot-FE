import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Network} from '../entity/network';

const API_URL = `${environment.API_URL}/networks`;

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  networkList: Network[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Network[]> {
    return this.httpClient.get<Network[]>(`${API_URL}`);
  }

  getById(id: number): Observable<Network> {
    return this.httpClient.get<Network>(`${API_URL}/${id}`);
  }

  addNew(network: Network): Observable<Network> {
    return this.httpClient.post<Network>(`${API_URL}`, network);
  }
}
