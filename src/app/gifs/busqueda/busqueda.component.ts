import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {


  constructor(private gifsService:GifsService) { }

  //Segunda forma de obtener datos
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar(termino :string){

    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim() == ''){
      return ;
    }

    this.gifsService.buscarGifs(valor)
    this.txtBuscar.nativeElement.value="";
  }
}
