import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { ListPrestamoComponent } from './components2/list-prestamo/list-prestamo.component';
import { AddPrestamoComponent } from './components2/add-prestamo/add-prestamo.component';
import { EditPrestamoComponent } from './components2/edit-prestamo/edit-prestamo.component';

import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { EditClienteComponent } from './components/edit-cliente/edit-cliente.component';

// Importar rutas
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

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
    ListPrestamoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot( routes, { useHash: true } ),  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
