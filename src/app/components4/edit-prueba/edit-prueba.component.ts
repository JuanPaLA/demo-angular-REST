import { Component, OnInit } from '@angular/core';
import { Prueba } from '../../model/prueba';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PruebaService } from '../../services/prueba.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-prueba',
  templateUrl: './edit-prueba.component.html',
  styles: []
})
export class EditPruebaComponent implements OnInit {

  prueba: Prueba;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: PruebaService) { }

  ngOnInit() {

    const pruebaId = localStorage.getItem('editPruebaId');

    if ( !pruebaId ) {
      alert('Acción invalida');
      this.router.navigate(['list-prueba']);
      return;
    }

    this.editForm = this.formBuilder.group({
      
      numero1: ['', Validators.required],
      numero2: ['', Validators.required]
      
    });

    this.service.getPrueba(+pruebaId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updatePrueba(this.editForm.value)
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