import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlunosComponent } from './alunos/alunos.component';
import { MenuComponent } from './menu/menu.component';

import {MatSidenavModule} from '@angular/material/sidenav';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';

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
    ToolbarModule,
    SplitButtonModule,
    TableModule,

    MatSidenavModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
