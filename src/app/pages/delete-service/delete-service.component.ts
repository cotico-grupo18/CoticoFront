import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrl: './delete-service.component.scss'
})
export class DeleteServiceComponent {
  nombreServicio: string = '';
  cantidadPersonas: number = 0;
  disponibilidad: string = '';
  planes: string = '';
  imagen: string = '';
  codigoAdministrativo: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nombreServicio = params['nombreServicio'];
      this.cantidadPersonas = params['cantidadPersonas'];
      this.disponibilidad = params['disponibilidad'];
      this.planes = params['planes'];
      this.imagen = params['imagen'];
    });
  }

  eliminarServicio(): void {
    if (this.codigoAdministrativo === 'CoTiCoStAy') {
      Swal.fire({
        icon: 'success',
        title: 'Servicio eliminado',
        text: 'El servicio se ha eliminado correctamente.',
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
