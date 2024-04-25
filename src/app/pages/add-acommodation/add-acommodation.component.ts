import { Component } from '@angular/core';

interface Servicio {
  id: string;
  nombre: string;
  selected: boolean;
}

@Component({
  selector: 'app-add-acommodation',
  templateUrl: './add-acommodation.component.html',
  styleUrl: './add-acommodation.component.scss'
})
export class AddAcommodationComponent {
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

    agregarOtroServicio(): void {
        this.servicios.push({ id: 'otro', nombre: '', selected: true });
    }

    cancelar(): void {
        // Lógica para cancelar la acción
    }

    submitForm(): void {
        // Lógica para enviar el formulario
    }
}
