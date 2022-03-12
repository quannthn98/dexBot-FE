import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const BOT_API_URL = environment.BOT_AI_URL;

@Injectable({
  providedIn: 'root'
})
export class BotSwapService {

  constructor(private http: HttpClient) {
  }

  startBot(setup: any): Observable<any> {
    return this.http.post<any>(`${BOT_API_URL}/start`, setup);
  }
}
