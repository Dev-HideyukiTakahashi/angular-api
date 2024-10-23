import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Music } from '../models/music.model';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {

  private url = environment.api;

  /* Declarando como private no Angular deixa acessível fora do escopo  
     é necessário adicionar 'provideHttpClient()' no app.config para importar o HttpClient */
  constructor(private httpClient: HttpClient) {
  }

  obterMusicas() {
    this.httpClient.get<Music[]>(this.url + '/musics');
  }
}
