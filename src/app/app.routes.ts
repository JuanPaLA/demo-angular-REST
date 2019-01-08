import { Routes } from '@angular/router';

import { ListPrestamoComponent } from './components2/list-prestamo/list-prestamo.component';
import { AddPrestamoComponent } from './components2/add-prestamo/add-prestamo.component';
import { EditPrestamoComponent } from './components2/edit-prestamo/edit-prestamo.component';

import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { EditClienteComponent } from './components/edit-cliente/edit-cliente.component';

export const routes: Routes = [
  { path: 'list-prestamos', component: ListPrestamoComponent},
  { path: 'list-clientes', component: ListClienteComponent },
  { path: 'add-prestamos', component: AddPrestamoComponent},
  { path: 'add-clientes', component: AddClienteComponent },
  { path: 'edit-prestamos', component: EditPrestamoComponent},
  { path: 'edit-clientes', component: EditClienteComponent }
]; 