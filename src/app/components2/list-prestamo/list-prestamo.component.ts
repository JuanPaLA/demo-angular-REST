import { Component, OnInit } from '@angular/core';
import { Prestamo } from '../../model/prestamo';
import { PrestamoService } from '../../services/prestamo.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-prestamo',
  templateUrl: './list-prestamo.component.html',
  styles: []
})
export class ListPrestamoComponent implements OnInit {
  prestamos: Prestamo[];

  constructor(private router: Router, private service: PrestamoService) {}

  ngOnInit() {
    this.service.getPrestamos().subscribe(data => (this.prestamos = data));
  }

  deletePrestamo(prestamo: Prestamo): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro desea eliminar al Prestamo ${prestamo.id} ${
        prestamo.idcliente
      }?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.deletePrestamo(prestamo.id).subscribe(data => {
          this.prestamos = this.prestamos.filter(c => c !== prestamo);
        });

        swal('Eliminado!', 'Se ha eliminado el Préstamo.', 'success');
      }
    });
  }

  editPrestamo(prestamo: Prestamo): void {
    localStorage.removeItem('editPrestamoId');
    localStorage.setItem('editPrestamoId', prestamo.id.toString());
    this.router.navigate(['edit-prestamos']);
  }

  addPrestamo(): void {
    this.router.navigate(['add-prestamos']);
  }
}