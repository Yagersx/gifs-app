import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifResponse, Gif } from '../../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiUrl: string = "api.giphy.com/v1/gifs/search";
  private apiKey: string = "zho9tWY5RYI2RkCHUS3bJEIUJ0ECcuGi";

  public resultados: Gif[] = [];

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    // this._historial = localStorage.getItem('historial')

    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }

    if (localStorage.getItem('ultimosResultados')) {
      this.resultados = JSON.parse(localStorage.getItem('ultimosResultados')!);
    }
  }

  buscarGifs(termino: string) {

    termino = termino.trim().toLowerCase();

    if (!this._historial.includes(termino)) {
      this._historial.unshift(termino);
      this._historial = this._historial.splice(0, 10)
      localStorage.setItem("historial", JSON.stringify(this._historial));
    }


    const params = new HttpParams().set('api_key', this.apiKey).set('limit','10').set('q',termino);
    this.http.get<GifResponse>(`https://api.giphy.com/v1/gifs/search`, {params})
      .subscribe((response: GifResponse) => {
        localStorage.setItem('ultimosResultados', JSON.stringify(response.data));
        this.resultados = response.data;
      });
  }

}
