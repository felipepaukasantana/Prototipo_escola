import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { AlunosComponent } from './alunos/alunos.component';
import { SerieModule } from './serie/serie.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,

    InputTextModule,
    DropdownModule,

    MatSidenavModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    SerieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
