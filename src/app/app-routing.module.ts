import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPrestamoComponent } from './components2/list-prestamo/list-prestamo.component';
import { AddPrestamoComponent } from './components2/add-prestamo/add-prestamo.component';
import { EditPrestamoComponent } from './components2/edit-prestamo/edit-prestamo.component';

import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { EditClienteComponent } from './components/edit-cliente/edit-cliente.component';

const routes: Routes = [
  { path: 'prestamos', component: ListPrestamoComponent},
  { path: 'clientes', component: ListClienteComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ListPrestamoComponent, ListClienteComponent, AddClienteComponent, AddPrestamoComponent, EditClienteComponent, EditPrestamoComponent];