import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicsService } from './services/musics.service';
import { environment } from '../environments/environment';
import { Music } from './models/music.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-api';

  // musicas: Music[] = [];
  /* Refatorando, por convenção colocar o '$' após o nome para identificar que é um observable*/
  musicas$ = new Observable<Music[]>();

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
}
