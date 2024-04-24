import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate-hotel',
  templateUrl: './validate-hotel.component.html',
  styleUrl: './validate-hotel.component.scss'
})

// FALTA: Validar que el codigo administrativo corresponda a la propiedad
// Validar que el hotel no ha relizado el registro anteriormente, si ya lo ha registrado entonces mostrar un mensaje de error
// Subir el nombre de las propiedades que hacen falta por hacer el resgistro
export class ValidateHotelComponent {
  constructor(private router: Router) { }

  nombrePropiedad: string = 'Seleccionar';
  codigoAdministrativo: string = '';

  propiedades: string[] = ['Hotel 1', 'Hostal 2', 'Apartamento']; // Aqui deben subirse las propiedades

  errorCodigoAdministrativo: string = '';
  errorGeneral: string = '';
  errorPropiedad: string = '';

  validarFormulario(): void {
    // Reiniciar mensajes de error
    this.errorCodigoAdministrativo = '';
    this.errorPropiedad = '';
    this.errorGeneral = '';

     // Validar que se haya seleccionado una propiedad
     if (this.nombrePropiedad === 'Seleccionar') {
      this.errorPropiedad = 'Por favor seleccione una propiedad.';
      return; // Detener la validación si falta la selección de propiedad
    }

    // Validar código administrativo
    if (this.codigoAdministrativo.trim().length !== 10) {
      this.errorCodigoAdministrativo = 'El código administrativo debe tener 10 dígitos.';
      return;
    }

    // Verificar si hay errores
    if (this.errorPropiedad || this.errorCodigoAdministrativo) {
      return; // Detener la validación si hay errores
    }

    // Validar si algún campo está vacío
    if (!this.nombrePropiedad || !this.codigoAdministrativo) {
      this.errorGeneral = 'Por favor complete todos los campos del formulario.';
    } else {
      this.errorGeneral = ''; // Limpiar el mensaje de error general si no hay errores
      this.router.navigate(['/signup']);
    }
  }

  limpiarErrores(): void {
    this.errorCodigoAdministrativo = '';
    this.errorGeneral = '';
    this.errorPropiedad = '';
  }
}
