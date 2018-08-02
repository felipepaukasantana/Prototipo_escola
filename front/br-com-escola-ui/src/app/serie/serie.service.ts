import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class SerieService {

  constructor() { }

  buscarSeries() {
    return ['SÉRIE 1', 'SÉRIE 2', 'SÉRIE 3', 'SÉRIE 4'];
  }
}
