import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-staff',
  templateUrl: './delete-staff.component.html',
  styleUrl: './delete-staff.component.scss'
})
export class DeleteStaffComponent {
  nombre: string = '';
  cargo: string = '';
  telefono: string = '';
  correo: string = '';
  imagen: string = '';
  codigoAdministrativo: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.cargo = params['cargo'];
      this.correo = params['correo'];
      this.telefono = params['telefono'];
      this.imagen = params['imagen'];
    });
  }


  eliminarStaff(): void {
    if (this.codigoAdministrativo === 'CoTiCoStAy') {
      Swal.fire({
        icon: 'success',
        title: 'Personal eliminado',
        text: 'El personal se ha eliminado correctamente.',
      }).then(() => {
        window.location.href = '/staff-management';
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El código administrativo ingresado es incorrecto.',
      });
    }
  }
}
