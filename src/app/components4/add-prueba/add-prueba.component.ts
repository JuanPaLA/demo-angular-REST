import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PruebaService } from '../../services/prueba.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-prueba',
  templateUrl: './add-prueba.component.html',
  styles: []
})
export class AddPruebaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: PruebaService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      numero1: ['', Validators.required],
      numero2: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.createPrueba( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-prueba']);
        swal({
          position: 'top',
          type: 'success',
          title: `Prueba creado con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}