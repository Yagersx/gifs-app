import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  buscarGifs(termino:string){

    termino = termino.trim().toLowerCase();

    if(!this._historial.includes(termino)){
      this._historial.unshift(termino);
    }

    this._historial = this._historial.splice(0,10)

    console.log(this._historial);
  }

}
