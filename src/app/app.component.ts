import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicsService } from './services/musics.service';
import { environment } from '../environments/environment';
import { Music } from './models/music.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-api';

  // musicas: Music[] = [];
  /* Refatorando, por convenção colocar o '$' após o nome para identificar que é um observable*/
  musicas$ = new Observable<Music[]>();

  // Form , adicionado 'FormsModule' para aceitar o ngModel no html
  id = '';
  music = '';
  author = '';

  constructor(private musicsService: MusicsService) {
    this.obterMusicas();
  }

  /* GET ALL */
  obterMusicas() {
    // this.musicsService.obterMusicas()
    //   .subscribe(musicas => this.musicas = musicas)

    /* Refatorando, foi necessário colocar 'async' no loop 'for' do html
       nesse caso o Angular faz o subscribe */
    this.musicas$ = this.musicsService.obterMusicas();
  }

  buttonClick() {
    if (!this.music || !this.author) {
      return;
    }
    if (this.id) {
      this.atualizar();
      return
    }

    /* Passando no parâmetro dados para instanciar uma music do model */
    this.musicsService.cadastrarMusica({ author: this.author, text: this.music })
      .subscribe(() => this.obterMusicas())
  }

  atualizar() {
    this.musicsService.editarMusica({ id: parseInt(this.id), author: this.author, text: this.music })
      .subscribe(() => this.obterMusicas());

  }

  preencherCampos(music: Music) {
    this.id = music.id!.toString();
    this.author = music.author;
    this.music = music.text;
  }

  remover(id: number) {
    this.musicsService.remover(id)
      .subscribe(() => this.obterMusicas());
  }
}
