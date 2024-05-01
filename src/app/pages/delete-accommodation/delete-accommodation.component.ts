import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-accommodation',
  templateUrl: './delete-accommodation.component.html',
  styleUrl: './delete-accommodation.component.scss'
})
export class DeleteAccommodationComponent {
  nombreHabitacion: string = '';
  ocupantes: number = 0;
  servicios: string = '';
  precio: string = '';
  imagen: string = '';
  codigoAdministrativo: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nombreHabitacion = params['nombre'];
      this.ocupantes = params['cantidadPersonas'];
      this.servicios = params['servicios'];
      this.precio = params['precioNoche'];
      this.imagen = params['imagen'];
    });
  }

  eliminarAlojamiento(): void {
    if (this.codigoAdministrativo === 'CoTiCoStAy') {
      Swal.fire({
        icon: 'success',
        title: 'Alojamiento eliminado',
        text: 'El alojamiento se ha eliminado correctamente.',
      }).then(() => {
        window.location.href = '/accommodations-and-services';
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
