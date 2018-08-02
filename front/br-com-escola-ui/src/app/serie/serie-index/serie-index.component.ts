import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-index',
  templateUrl: './serie-index.component.html',
  styleUrls: ['./serie-index.component.css']
})
export class SerieIndexComponent implements OnInit {

  series: string[];

  // tslint:disable-next-line:no-trailing-whitespace
  constructor(private serieService: SerieService) {
    this.series = serieService.buscarSeries();
  }

  ngOnInit() {
  }

}
