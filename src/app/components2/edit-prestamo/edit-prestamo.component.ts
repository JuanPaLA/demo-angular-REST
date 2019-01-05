import { Component, OnInit } from '@angular/core';
import { Prestamo } from '../../model/prestamo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrestamoService } from '../../services/prestamo.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-prestamo',
  templateUrl: './edit-prestamo.component.html',
  styles: []
})
export class EditPrestamoComponent implements OnInit {

  prestamo: Prestamo;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: PrestamoService) { }

  ngOnInit() {

    const prestamoId = localStorage.getItem('editPrestamoId');

    if ( !prestamoId ) {
      alert('Acción invalida');
      this.router.navigate(['list-prestamos']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      idCliente: ['', Validators.required],
      idpagos: ['', Validators.required],
      monto: ['', Validators.required],
      tasa: ['', Validators.required],
      montosaldado: ['', Validators.required],
      cantidadpagos: ['', Validators.required],
      diaspagados: ['', Validators.required],
      diasnopagados: ['', Validators.required],
      fechainicio: ['', Validators.required],
      pagos: ['', Validators.required]
    });

    this.service.getPrestamo(+prestamoId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updatePrestamo(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['list-prestamos']);
        swal({
          position: 'top',
          type: 'success',
          title: `Cliente modificado con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}