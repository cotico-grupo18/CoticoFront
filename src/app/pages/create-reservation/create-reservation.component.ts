import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrl: './create-reservation.component.scss'
})
export class CreateReservationComponent {
  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  correo: string = '';
  confirmarCorreo: string = '';
  cantidad: number | null = null;
  check_in: string = '';
  check_out: string = '';
  habitacion: string = '';
  servicios: string = '';
  precioNoche: string = '';
  imagen: string = '';
  precioTotal: string = '';
  descuento: number = 0;

  correoInvalido: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.habitacion = params['habitacion'];
      this.servicios = params['servicios'];
      this.precioNoche = params['precio'];
      this.imagen = params['imagen'];
      this.calcularPrecioTotal();
    });
  }

  calcularPrecioTotal(): void {
    const precioLimpio: string = this.precioNoche.replace(/[^\d.]/g, '');
    const precioPorNocheNumber: number = parseFloat(precioLimpio);
    const descuentoNumber: number = parseFloat(this.descuento.toString());
    const total: number = precioPorNocheNumber - (precioPorNocheNumber * (descuentoNumber / 100));
    this.precioTotal = total.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 3, maximumFractionDigits: 3});
  }

  reservar(): void {
    if (this.validarCampos()) {
      Swal.fire({
        icon: 'success',
        title: '¡Reserva realizada!',
        text: 'La reserva ha sido creada con éxito.',
      }).then(() => {
        window.location.href = '/bookings';
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Por favor, complete todos los campos antes de reservar.',
      });
    }
  }

  validarCampos(): boolean {
    return !!(
      this.nombre && this.apellido && this.telefono && this.correo && this.confirmarCorreo &&
      this.cantidad && this.check_in && this.check_out
    );
  }

  validarCorreos(): void {
    this.correoInvalido = this.correo !== this.confirmarCorreo;
  }
}
