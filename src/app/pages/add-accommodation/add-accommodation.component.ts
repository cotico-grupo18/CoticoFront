import { Component } from '@angular/core';
import Swal from 'sweetalert2';

interface Servicio {
  id: string;
  nombre: string;
  selected: boolean;
}

@Component({
  selector: 'app-add-accommodation',
  templateUrl: './add-accommodation.component.html',
  styleUrl: './add-accommodation.component.scss'
})
export class AddAccommodationComponent {
  nombre: string = '';
  ocupacionMaxima: number = 1;
  precioPorNoche: number = 0; 
  otrosSeleccionado: boolean = false;
  servicios: Servicio[] = [ 
    { id: 'tv', nombre: 'Televisor', selected: false },
    { id: 'toallas', nombre: 'Toallas', selected: false },
    { id: 'aireAcondicionado', nombre: 'Aire acondicionado', selected: false },
    { id: 'wifiGratis', nombre: 'WiFi gratis', selected: false }
  ];
  otrosServicios: { nombre: string }[] = [{ nombre: '' }];
  imagenSeleccionada: string = ''; 

  agregarOtroServicio() {
    this.otrosServicios.push({ nombre: '' });
  }

  eliminarUltimoOtroServicio() {
    if (this.otrosServicios.length > 1) {
      this.otrosServicios.pop();
    }
  }

  archivoSeleccionado(event: any) {
    const archivo: File = event.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenSeleccionada = e.target.result;
      };
      reader.readAsDataURL(archivo);
    }
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
    this.nombre &&
    this.ocupacionMaxima &&
    this.precioPorNoche &&
    this.imagenSeleccionada
  );
}
  

}
