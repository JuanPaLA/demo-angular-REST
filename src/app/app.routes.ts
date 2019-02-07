import { Routes } from '@angular/router';

import { ListPrestamoComponent } from './components2/list-prestamo/list-prestamo.component';
import { AddPrestamoComponent } from './components2/add-prestamo/add-prestamo.component';
import { EditPrestamoComponent } from './components2/edit-prestamo/edit-prestamo.component';

import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { EditClienteComponent } from './components/edit-cliente/edit-cliente.component';

import { ListCobroComponent } from './components3/list-cobro/list-cobro.component';
import { AddCobroComponent } from './components3/add-cobro/add-cobro.component';
import { EditCobroComponent } from './components3/edit-cobro/edit-cobro.component';

import { AddPruebaComponent } from './components4/add-prueba/add-prueba.component';
import { EditPruebaComponent } from './components4/edit-prueba/edit-prueba.component';
import { ListPruebaComponent } from './components4/list-prueba/list-prueba.component';


export const routes: Routes = [
  { path: 'list-prestamos', component: ListPrestamoComponent},
  { path: 'list-clientes', component: ListClienteComponent },
  { path: 'add-prestamos', component: AddPrestamoComponent},
  { path: 'add-clientes', component: AddClienteComponent },
  { path: 'edit-prestamos', component: EditPrestamoComponent},
  { path: 'edit-clientes', component: EditClienteComponent },
  { path: 'add-cobros', component: AddCobroComponent },
  { path: 'edit-cobros', component: EditCobroComponent},
  { path: 'list-cobros', component: ListCobroComponent },
  { path: 'add-pruebas', component: AddPruebaComponent },
  { path: 'edit-pruebas', component: EditPruebaComponent},
  { path: 'list-pruebas', component: ListPruebaComponent }
]; 