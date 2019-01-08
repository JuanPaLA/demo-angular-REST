import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styles: []
})
export class AddClienteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ClienteService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      celular: ['', Validators.required],
      dni: ['', Validators.required],
    /*
      telfijo: ['', Validators.required],
      domcobro: ['', Validators.required],
      domsec: ['', Validators.required],
      */
      barrio: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.createCliente( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-clientes']);
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