import { Component, OnInit } from '@angular/core';
import { Cobro } from '../../model/cobro';
import { CobroService } from '../../services/cobro.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-cobro',
  templateUrl: './list-cobro.component.html',
  styles: []
})
export class ListCobroComponent implements OnInit {
  cobros: Cobro[];

  constructor(private router: Router, private service: CobroService) {}

  ngOnInit() {
    this.service.getCobros().subscribe(data => (this.cobros = data));
  }

  deleteCobro(cobro: Cobro): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro desea eliminar el cobro ${cobro.id} ${
        cobro.idcliente
      }?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.deleteCobro(cobro.id).subscribe(data => {
          this.cobros = this.cobros.filter(c => c !== cobro);
        });

        swal('Eliminado!', 'Se ha eliminado el cobro.', 'success');
      }
    });
  }

  editCobro(cobro: Cobro): void {
    localStorage.removeItem('editCobroId');
    let aux = cobro.id;
    if(aux==null){
      let key = 0;
      localStorage.setItem('editCobroId', key.toString());
    }else{
      localStorage.setItem('editCobroId', cobro.id.toString());
    }
    
    
    this.router.navigate(['edit-cobros']);
  }

  addCobro(): void {
    this.router.navigate(['add-cobros']);
  }
}