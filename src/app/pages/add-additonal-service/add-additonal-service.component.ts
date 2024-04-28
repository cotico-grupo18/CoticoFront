import { Component } from '@angular/core';

interface Servicio {
  id: string;
  nombre: string;
  selected: boolean;
}

@Component({
  selector: 'app-add-additonal-service',
  templateUrl: './add-additonal-service.component.html',
  styleUrl: './add-additonal-service.component.scss'
})
export class AddAdditonalServiceComponent {
  nombre: string = '';
  imagenSeleccionada: string = ''; // Variable para almacenar la URL de la imagen seleccionada

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
  
  dispoReserva: any[] = [];
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  constructor() {
    // Agregar una jornada por defecto al iniciar el componente
    this.agregarDispoReserva();
  }

  agregarDispoReserva(): void {
    this.dispoReserva.push({ dia: 'Seleccionar', horaInicio: '', horaFin: '' });
  }

  eliminarDispoReserva(index: number): void {
    this.dispoReserva.splice(index, 1);
  }

  planes: any[] = []; // Arreglo para almacenar los planes

    agregarPlan() {
        this.planes.push({ titulo: '', descripcion: '', precio: 0 });
    }

    eliminarPlan(index: number) {
        this.planes.splice(index, 1);
    }

      
  
  cancelar() {
    // Lógica para el boton cancelar 
  }

  submitForm(){
    // Lógica para enviar el formulario
  }


}
