import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private giftService: GiftsService) { }


  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length === 0){return;}
    this.giftService.buscarGifts(valor);
    this.txtBuscar.nativeElement.value = '';
  }

}
