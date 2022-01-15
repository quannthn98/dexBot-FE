import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Provider} from '../entity/provider';
import {Network} from '../entity/network';

const API_URL = `${environment.API_URL}/providers`;

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  providerList: Provider[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Provider[]> {
    return this.httpClient.get<Provider[]>(`${API_URL}`);
  }

  getByNetwork(networkId: number): Observable<Provider[]> {
    return this.httpClient.get<Provider[]>(`${API_URL}/network/${networkId}`);
  }

  getById(id: number): Observable<Provider> {
    return this.httpClient.get<Provider>(`${API_URL}/${id}`);
  }

  addNew(provider: Provider): Observable<Provider> {
    return this.httpClient.post<Provider>(`${API_URL}`, provider);
  }
}
