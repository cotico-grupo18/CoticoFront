import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-additonal-service',
  templateUrl: './add-additonal-service.component.html',
  styleUrl: './add-additonal-service.component.scss'
})
export class AddAdditonalServiceComponent {
  nombreServicio: string = '';
  imagenSeleccionada: string = '';
  dispoReserva: any[] = [];
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  planes: any[] = [];

  constructor() {
    this.agregarDispoReserva();
  }

  archivoSeleccionado(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenSeleccionada = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  } 

  agregarDispoReserva(): void {
    this.dispoReserva.push({ dia: 'Seleccionar', horaInicio: '', horaFin: '' });
  }

  eliminarDispoReserva(index: number): void {
    this.dispoReserva.splice(index, 1);
  }

  agregarPlan() {
    this.planes.push({ titulo: '', descripcion: '', precio: 0 });
  }

  eliminarPlan(index: number) {
    this.planes.splice(index, 1);
  }

  alertaExito() {
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'El alojamiento se añadió correctamente.',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      window.location.href = '/accommodations-and-services';
    });
  }

alertaError() {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Por favor, complete todos los campos antes de continuar.',
    confirmButtonText: 'Aceptar'
  });
}
 
validarFormulario() {
  if (this.camposValidos()) {
    this.alertaExito();
  } else {
    this.alertaError();
  }
}

camposValidos(): boolean {
  return !!(
    this.nombreServicio 
  );
}   

}
