import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-hotel-last-step',
  templateUrl: './signup-hotel-last-step.component.html',
  styleUrl: './signup-hotel-last-step.component.scss'
})
export class SignupHotelLastStepComponent {
  jornadas: any[] = [];
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  cargo: string = '';

  constructor(private router: Router) {
    this.agregarJornada();
  }

  agregarJornada(): void {
    this.jornadas.push({ dia: 'Seleccionar', horaInicio: '', horaFin: '' });
  }

  eliminarJornada(index: number): void {
    this.jornadas.splice(index, 1);
  }

  verificarCampos(): void {
    if (!this.cargo.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor complete todos los campos del formulario.'
      });
      return;
    }
    this.router.navigate(['/signin']);
  }
}
