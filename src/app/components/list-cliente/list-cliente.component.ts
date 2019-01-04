import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styles: []
})
export class ListClienteComponent implements OnInit {
  clientes: Cliente[];

  constructor(private router: Router, private service: ClienteService) {}

  ngOnInit() {
    this.service.getClientes().subscribe(data => (this.clientes = data));
  }

  deleteCliente(cliente: Cliente): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro desea eliminar al cliente ${cliente.nombre} ${
        cliente.apellido
      }?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.deleteCliente(cliente.id).subscribe(data => {
          this.clientes = this.clientes.filter(c => c !== cliente);
        });

        swal('Eliminado!', 'Se ha eliminado el cliente.', 'success');
      }
    });
  }

  editCliente(cliente: Cliente): void {
    localStorage.removeItem('editClienteId');
    localStorage.setItem('editClienteId', cliente.id.toString());
    this.router.navigate(['edit-cliente']);
  }

  addCliente(): void {
    this.router.navigate(['app-add-cliente']);
  }
}