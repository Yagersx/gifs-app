import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/interface/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  get resultados() {
    return this.gifsService.resultados;
  }


}
