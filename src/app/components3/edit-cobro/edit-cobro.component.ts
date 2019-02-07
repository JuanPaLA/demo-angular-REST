import { Component, OnInit } from '@angular/core';
import { Cobro } from '../../model/cobro';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CobroService } from '../../services/cobro.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-cobro',
  templateUrl: './edit-cobro.component.html',
  styles: []
})
export class EditCobroComponent implements OnInit {

  prueba: Cobro;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CobroService) { }

  ngOnInit() {

    const pruebaId = localStorage.getItem('editCobroId');

    if ( !pruebaId ) {
      alert('Acción invalida');
      this.router.navigate(['list-cobros']);
      return;
    }

    this.editForm = this.formBuilder.group({
      
      id: [],
      idprestamo: ['', Validators.required],
      idcliente: ['', null],
      idpago: ['', Validators.required],
      idgestor: ['', Validators.required],
      monto: ['', Validators.required],
      montocobrado: ['', Validators.required],
      fechacobro: ['', Validators.required]
      
    });

    this.service.getCobro(+pruebaId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updateCobro(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['list-cobros']);
        swal({
          position: 'top',
          type: 'success',
          title: `Core regidtsfi con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}