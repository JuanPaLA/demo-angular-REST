import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styles: []
})
export class EditClienteComponent implements OnInit {

  cliente: Cliente;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ClienteService) { }

  ngOnInit() {

    const clienteId = localStorage.getItem('editClienteId');

    if ( !clienteId ) {
      alert('Acción invalida');
      this.router.navigate(['list-cliente']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      celular: ['', Validators.required],
      dni: ['', Validators.required],
      telfijo: ['', Validators.required],
      domcobro: ['', Validators.required],
      domsec: ['', Validators.required],
      barrio: ['', Validators.required]
    });

    this.service.getCliente(+clienteId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updateCliente(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['list-cliente']);
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