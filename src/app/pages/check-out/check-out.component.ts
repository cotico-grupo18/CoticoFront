import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {
  nombreHabitacion: string = '';
  cantidadPersonas: number = 0;
  servicios: string = '';
  nombreHuesped: string = '';
  imagen: string = '';
  serviciosAdicionales: { servicio: string, plan: string, precio: string }[] = [];
  fechaSalida: string = '';
  horaSalida: string = '';
  precioHabitacion: string = '';
  total: string = '';

  reservas: any[] = [
    {
      nombreHuesped: 'Juan Bautista Ruiz',
      serviciosAdicionales: [
        { servicio: 'Piscina', plan: 'Plan básico', precio: '$20.000' }
      ],
      fechaSalida: 'Viernes, 3 de mayo del 2024',
      horaSalida: '12:00 p.m',
      precioHabitacion: '$130.000',
      total: 0
    },
    {
      nombreHuesped: 'Laura Camila Soto',
      serviciosAdicionales: [
        { servicio: '', plan: '', precio: '$0' }
      ],
      fechaSalida: 'Viernes, 3 de mayo del 2024',
      horaSalida: '2:00 p.m',
      precioHabitacion: '$100.000',
      total: 0
    },
    {
      nombreHuesped: 'Jimena Diaz Duran',
      serviciosAdicionales: [
        { servicio: 'Piscina', plan: 'Plan básico', precio: '$20.000' },
        { servicio: 'Cancha Voleibal', plan: 'Plan  medio tiempo', precio: '$15.000' }
      ],
      fechaSalida: 'Sábado, 4 de mayo del 2024',
      horaSalida: '4:00 p.m',
      precioHabitacion: '$125.000',
      total: 0
    },
    {
      nombreHuesped: 'Gabriel Prado',
      serviciosAdicionales: [
        { servicio: 'Cancha Voleibal', plan: 'Plan  medio tiempo', precio: '$15.000' }
      ],
      fechaSalida: 'Sábado, 4 de mayo del 2024',
      horaSalida: '10:00 a.m',
      precioHabitacion: '$140.000',
      total: 0
    },
  ]
  verModal: boolean = false;
  realizadoCheckOut: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nombreHabitacion = params['nombreHabitacion'];
      this.cantidadPersonas = params['cantidadPersonas'];
      this.servicios = params['servicios'];
      this.nombreHuesped = params['nombreHuesped'];
      this.imagen = params['imagen'];
      const reservaAdicional = this.reservas.find(reserva => reserva.nombreHuesped === this.nombreHuesped);
      if (reservaAdicional) {
        this.serviciosAdicionales = reservaAdicional.serviciosAdicionales;
        this.fechaSalida = reservaAdicional.fechaSalida;
        this.horaSalida = reservaAdicional.horaSalida;
        this.precioHabitacion = reservaAdicional.precioHabitacion;
        this.calcularTotal(reservaAdicional);
      }
    });
  }

  validarDatosReserva(): boolean {
    return !!this.nombreHuesped || !!this.cantidadPersonas || !!this.servicios || !!this.serviciosAdicionales.length || !!this.fechaSalida || !!this.horaSalida || !!this.imagen;
  }

  calcularTotal(reserva: any): void {
    let total: number = parseFloat(reserva.precioHabitacion.replace('$', ''));

    for (let servicio of reserva.serviciosAdicionales) {
      total += parseFloat(servicio.precio.replace('$', ''));
    }
    this.total = '$' + total.toFixed(3);
  }

  cerrarModal(): void {
    this.verModal = false;
  }

  checkOut(): void {
    Swal.fire({
      icon: 'success',
      title: '¡Check-out exitoso!',
      text: 'La fialización de la reserva se ha completado con éxito.',
    });
    this.realizadoCheckOut = true;
  }

}
