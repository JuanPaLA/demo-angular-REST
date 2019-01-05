import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrestamoService } from '../../services/prestamo.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-prestamo',
  templateUrl: './add-prestamo.component.html',
  styles: []
})
export class AddPrestamoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: PrestamoService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
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
  }

  onSubmit() {
    this.service.createPrestamo( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-prestamos']);
        swal({
          position: 'top',
          type: 'success',
          title: `Cliente creado con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}