import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'; 

import { ListPrestamoComponent } from './components2/list-prestamo/list-prestamo.component';
import { AddPrestamoComponent } from './components2/add-prestamo/add-prestamo.component';
import { EditPrestamoComponent } from './components2/edit-prestamo/edit-prestamo.component';

import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { EditClienteComponent } from './components/edit-cliente/edit-cliente.component';

import { AddCobroComponent } from './components3/add-cobro/add-cobro.component';
import { EditCobroComponent } from './components3/edit-cobro/edit-cobro.component';
import { ListCobroComponent } from './components3/list-cobro/list-cobro.component';

import { AddPruebaComponent } from './components4/add-prueba/add-prueba.component';
import { EditPruebaComponent } from './components4/edit-prueba/edit-prueba.component';
import { ListPruebaComponent } from './components4/list-prueba/list-prueba.component';

// Importar rutas
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

// Importar ReactiveFormsModule para los formularios
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddClienteComponent,
    EditClienteComponent,
    ListClienteComponent,
    AddPrestamoComponent,
    EditPrestamoComponent,
    ListPrestamoComponent,
    AddCobroComponent,
    EditCobroComponent,
    ListCobroComponent,
    AddPruebaComponent,
    EditPruebaComponent,
    ListPruebaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot( routes, { useHash: true } ),  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
