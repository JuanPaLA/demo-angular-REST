import { Routes } from '@angular/router';

import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { EditClienteComponent } from './components/edit-cliente/edit-cliente.component';
import { ListClienteComponent } from './components/list-cliente/list-cliente.component';

import { AddPrestamoComponent } from './components2/add-prestamo/add-prestamo.component';
import { EditPrestamoComponent } from './components2/edit-prestamo/edit-prestamo.component';
import { ListPrestamoComponent } from './components2/list-prestamo/list-prestamo.component';

export const ROUTES: Routes = [
    { path: 'add-cliente', component: AddClienteComponent },
    { path: 'edit-cliente', component: EditClienteComponent },
    { path: 'list-cliente', component: ListClienteComponent },

    { path: 'add-prestamo', component: AddPrestamoComponent },
    { path: 'edit-prestamo', component: EditPrestamoComponent },
    { path: 'list-prestamo', component: ListPrestamoComponent },

/*

    { path: '', pathMatch: 'full', redirectTo: 'list-cliente' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-cliente' },
    
    { path: '', pathMatch: 'full', redirectTo: 'list-prestamo' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-prestamo' }

    */

];