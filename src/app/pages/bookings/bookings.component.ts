import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent {
  entradaDate: string = '';
  salidaDate: string = '';
  cantidadPersonas: string = 'Seleccionar';

  constructor(private router: Router) { }

  mostrarReserva() {
    this.router.navigate(['/view-reservation']);
  }

}
