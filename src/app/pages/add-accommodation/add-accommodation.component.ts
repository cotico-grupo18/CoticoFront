import { Component } from '@angular/core';

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
  ocupacionMaxima: number = 1; // Determinar que la ocupación debe ser mínimo 1
  precioPorNoche: number = 0; 
  otrosSeleccionado: boolean = false; // El check de otros servicios por defecto está desactivado
  servicios: Servicio[] = [ // Servicios determinados por el sistema se pueden añadir más
    { id: 'tv', nombre: 'Televisor', selected: false },
    { id: 'toallas', nombre: 'Toallas', selected: false },
    { id: 'aireAcondicionado', nombre: 'Aire acondicionado', selected: false },
    { id: 'wifiGratis', nombre: 'WiFi gratis', selected: false }
  ];
  otrosServicios: { nombre: string }[] = [{ nombre: '' }]; // Servicios adicionales
  imagenSeleccionada: string = ''; // Variable para almacenar la URL de la imagen seleccionada

  agregarOtroServicio() {
    this.otrosServicios.push({ nombre: '' });
  }

  eliminarUltimoOtroServicio() { //Eliminar el ultimo campo adicionado como otro servicio
    if (this.otrosServicios.length > 1) {
      this.otrosServicios.pop();
    }
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
  
  

      
  
  cancelar() {
    // Lógica para el boton cancelar 
  }

  submitForm(){
    // Lógica para enviar el formulario
  }

}
