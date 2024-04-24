import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-hotel-last-step',
  templateUrl: './signup-hotel-last-step.component.html',
  styleUrl: './signup-hotel-last-step.component.scss'
})
export class SignupHotelLastStepComponent {
  jornadas: any[] = [];
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  constructor() {
    // Agregar una jornada por defecto al iniciar el componente
    this.agregarJornada();
  }

  agregarJornada(): void {
    this.jornadas.push({ dia: 'Seleccionar', horaInicio: '', horaFin: '' });
  }

  eliminarJornada(index: number): void {
    this.jornadas.splice(index, 1);
  }

  // FALTA: Validar que se pueden crear maximo 7 dias
  // que todos los campos esten llenos
}
