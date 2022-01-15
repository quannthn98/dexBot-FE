import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Wallet} from '../entity/wallet';

const API_URL = `${environment.API_URL}/wallets`;

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Wallet[]> {
    return this.httpClient.get<Wallet[]>(`${API_URL}`);
  }

  getById(id: number): Observable<Wallet> {
    return this.httpClient.get<Wallet>(`${API_URL}/${id}`);
  }

  addNew(wallet: Wallet): Observable<Wallet> {
    return this.httpClient.post<Wallet>(`${API_URL}`, wallet);
  }
}
