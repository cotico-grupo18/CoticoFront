import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.scss'
})
export class AddStaffComponent {
  nombre: string = '';
  cargo: string = '';
  telefono: string = ''; 
  correo: string = '';
  jornadas: any[] = [];
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  
  imagenSeleccionada: string = ''; 

  constructor(){
    this.agregarJornada();
  }

  agregarJornada(): void {
    this.jornadas.push({ dia: 'Seleccionar', horaInicio: '', horaFin: '' });
  }

  eliminarJornada(index: number): void {
    this.jornadas.splice(index, 1);
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
      text: 'El nuevo personal se añadió correctamente.',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      window.location.href = '/staff-management';
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
    this.cargo &&
    this.telefono &&
    this.correo &&
    this.imagenSeleccionada
  );
}
  

}
