import { Component} from '@angular/core';
import { GiftsService } from 'src/app/gifts/services/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  constructor(private giftService: GiftsService) { }

  get historialGifts() {
    return this.giftService.historial
  }

  buscar(termino: string){
    this.giftService.buscarGifts(termino);
  }


}
