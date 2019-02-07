import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CobroService } from '../../services/cobro.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-cobro',
  templateUrl: './add-cobro.component.html',
  styles: []
})
export class AddCobroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CobroService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      idprestamo: ['', Validators.required],
      idcliente: ['', Validators.required],
      idpago: ['', Validators.required],
      idgestor: ['', Validators.required],
      monto: ['', Validators.required],
     // montocobrado: ['', Validators.required],
      fechacobro: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.createCobro( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-cobros']);
        swal({
          position: 'top',
          type: 'success',
          title: `Cobr registrado con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}