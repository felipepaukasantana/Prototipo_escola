import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlunosComponent } from './alunos/alunos.component';

import {MatSidenavModule} from '@angular/material/sidenav';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    InputTextModule,
    DropdownModule,
    ToolbarModule,
    SplitButtonModule,
    TableModule,

    MatSidenavModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' },
  MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
