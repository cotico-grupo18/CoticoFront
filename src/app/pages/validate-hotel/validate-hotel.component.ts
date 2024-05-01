import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validate-hotel',
  templateUrl: './validate-hotel.component.html',
  styleUrl: './validate-hotel.component.scss'
})


export class ValidateHotelComponent {
  constructor(private router: Router) { }

  nombrePropiedad: string = 'Seleccionar';
  codigoAdministrativo: string = '';

  propiedades: string[] = ['Hotel Villa del Mar'];

  errorCodigoAdministrativo: string = '';
  errorGeneral: string = '';
  errorPropiedad: string = '';

  validarFormulario(): void {
    this.errorCodigoAdministrativo = '';
    this.errorPropiedad = '';
    this.errorGeneral = '';

    if (this.nombrePropiedad === 'Seleccionar') {
      this.errorPropiedad = 'Por favor seleccione una propiedad.';
      return;
    }

    if (this.nombrePropiedad === 'Hotel Villa del Mar') {
      if (this.codigoAdministrativo.trim() !== 'CoTiCoStAy') {
        Swal.fire({
          icon: 'error',
          title: 'Contraseña incorrecta',
          text: 'La contraseña ingresada es incorrecta.'
        });
        return;
      }
    }

    if (this.codigoAdministrativo.trim().length !== 10) {
      this.errorCodigoAdministrativo = 'El código administrativo debe tener 10 dígitos.';
      return;
    }

    if (this.errorPropiedad || this.errorCodigoAdministrativo) {
      return;
    }

    if (!this.nombrePropiedad || !this.codigoAdministrativo) {
      this.errorGeneral = 'Por favor complete todos los campos del formulario.';
    } else {
      this.errorGeneral = '';
      this.router.navigate(['/signup']);
    }
  }

}
