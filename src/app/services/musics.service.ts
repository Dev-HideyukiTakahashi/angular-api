import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Music, MusicCadastrar } from '../models/music.model';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {

  private url = `${environment.api}/musics`;

  /* Declarando como private no Angular deixa acessível fora do escopo,  
     é necessário adicionar 'provideHttpClient()' no app.config para importar o HttpClient
     em versões antigas do Angular era adicionadop no app.module */
  constructor(private httpClient: HttpClient) {
  }

  /* GET ALL */
  obterMusicas() {
    return this.httpClient.get<Music[]>(this.url);
  }

  /* POST */
  cadastrarMusica(music: MusicCadastrar) {
    return this.httpClient.post<Music>(this.url, music)
  }
}
