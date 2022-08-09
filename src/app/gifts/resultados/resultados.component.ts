import { Component} from '@angular/core';
import { Gif } from '../interface/gifs.interface';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  get resultados(): Gif[] {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GiftsService) { }

}
