import { Component, OnInit } from '@angular/core';
import { Prueba } from '../../model/prueba';
import { PruebaService } from '../../services/prueba.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-prueba',
  templateUrl: './list-prueba.component.html',
  styles: []
})
export class ListPruebaComponent implements OnInit {
  prueba: Prueba[];

  constructor(private router: Router, private service: PruebaService) {}

  ngOnInit() {
    this.service.getPruebas().subscribe(data => (this.prueba = data));
  }

  deletePrueba(prueba: Prueba): void {
    swal({
      title: 'Está seguro?',
      /*text: `¿Seguro desea eliminar la prueba ${prueba.numero1} ${
        prueba.numero2
      }?`,*/
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.deletePrueba(prueba.numero1).subscribe(data => {
          this.prueba = this.prueba.filter(c => c !== prueba);
        });

        swal('Eliminado!', 'Se ha eliminado el Coso.', 'success');
      }
    });
  }

  editPrueba(prueba: Prueba): void {
    localStorage.removeItem('editPruebaId');
    localStorage.setItem('editPruebaId', prueba.numero1.toString());
    this.router.navigate(['edit-prueba']);
  }

  addPrueba(): void {
    this.router.navigate(['add-prueba']);
  }
}
