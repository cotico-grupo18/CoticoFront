import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.scss'
})
export class CheckInComponent {
  searchQuery: string = '';
  filteredReservas: any[] = [];

  reservas: any[] = [
    {
      imagen: 'assets/img/rooms/Habitacion1.jpg',
      nombreHabitacion: 'Habitación 3B',
      nombreHuesped: 'Juan Bautista Ruiz',
      cantidadPersonas: 2,
      servicios: 'TV, Aire acondicionado, Nevera, Balcón',
      fechaIngreso: 'Miércoles, 1 de mayo del 2024',
      horaIngreso: '9:00 a.m'
    },
    {
      imagen: 'assets/img/rooms/Habitacion2.jpg',
      nombreHabitacion: 'Habitación 1A',
      nombreHuesped: 'Laura Camila Soto',
      cantidadPersonas: 2,
      servicios: 'TV, Aire acondicionado, Nevera, Balcón',
      fechaIngreso: 'Miércoles, 1 de mayo del 2024',
      horaIngreso: '10:00 a.m'
    },
    {
      imagen: 'assets/img/rooms/Habitacion3.jpg',
      nombreHabitacion: 'Habitación 4A',
      nombreHuesped: 'Jimena Diaz Duran',
      cantidadPersonas: 2,
      servicios: 'TV, Aire acondicionado, Nevera, Cocina sencilla',
      fechaIngreso: 'Miércoles, 1 de mayo del 2024',
      horaIngreso: '5:00 p.m'
    },
    {
      imagen: 'assets/img/rooms/Habitacion4.jpg',
      nombreHabitacion: 'Habitación 2C',
      nombreHuesped: 'Gabriel Prado',
      cantidadPersonas: 2,
      servicios: 'TV, Aire acondicionado, Nevera, Cocina sencilla',
      fechaIngreso: 'Jueves, 2 de mayo del 2024',
      horaIngreso: '10:00 a.m'
    },
  ]

  constructor(private router: Router) { 
    this.filteredReservas = this.reservas;
  }  

  checkIn(reserva: any): void {
    Swal.fire({
      icon: 'success',
      title: '¡Check-In Exitoso!',
      text: 'La reserva se ha completado con éxito.',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/check-out'], { queryParams: {
          imagen: reserva.imagen,
          nombreHabitacion: reserva.nombreHabitacion,
          nombreHuesped: reserva.nombreHuesped,
          cantidadPersonas: reserva.cantidadPersonas,
          servicios: reserva.servicios
        }});
        this.eliminarReserva(reserva);
      }
    });
  }

  eliminarReserva(reserva: any): void {
    const index = this.reservas.indexOf(reserva);
    if (index !== -1) {
      this.reservas.splice(index, 1);
    }
  }

  filtrarReservas(): void {
    this.filteredReservas = this.reservas.filter(reserva => {
      return (
        (reserva.nombreHuesped.toLowerCase().includes(this.searchQuery.toLowerCase())) || 
        (reserva.nombreHabitacion.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    });
  }
  

}
