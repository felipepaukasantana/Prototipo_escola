import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';
import { SerieIndexComponent } from './serie-index/serie-index.component';
import { SerieService } from './serie.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      SerieComponent,
      SerieIndexComponent
  ],
  exports: [
    SerieComponent
  ],
  providers: [
    SerieService
  ]
})
export class SerieModule { }
