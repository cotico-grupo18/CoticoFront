import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrl: './staff-management.component.scss'
})
export class StaffManagementComponent {
  searchQuery: string = '';
  filteredStaff: any[] = [];

  personal: any[] = [
    {
      imagen: 'assets/img/staff/staff1.jpg',
      nombre: 'Nicolas Garavito Espitia',
      cargo: 'Chef principal',
      telefono: '3120000002',
      correo: 'nicolasGaravitoe@villadelmar.com',
      Turno: [{ dia: 'Lunes', horaInicio: '8:00 am', horaSalida: '5:00 pm' },
      { dia: 'Martes', horaInicio: '8:00 am', horaSalida: '5:00 pm' },
      { dia: 'Jueves', horaInicio: '8:00 am', horaSalida: '5:00 pm' },
      { dia: 'Viernes', horaInicio: '8:00 am', horaSalida: '5:00 pm' }]
    },
    {
      imagen: 'assets/img/staff/staff2.jpeg',
      nombre: 'Ana Lorena Ruiz Muñoz',
      cargo: 'Recepcionista',
      correo: 'alorenaruiz@villadelmar.com',
      telefono: '3120000012',
      Turno: [{ dia: 'Lunes', horaInicio: '6:00 am', horaSalida: '3:00 pm' },
      { dia: 'Martes', horaInicio: '6:00 am', horaSalida: '3:00 pm' },
      { dia: 'Miércoles', horaInicio: '6:00 am', horaSalida: '3:00 pm' },
      { dia: 'Jueves', horaInicio: '6:00 am', horaSalida: '3:00 pm' },
      { dia: 'Viernes', horaInicio: '8:00 am', horaSalida: '2:00 pm' }]
    },
    {
      imagen: 'assets/img/staff/staff3.jpg',
      nombre: 'Vanessa Cortez',
      cargo: 'Contadora',
      telefono: '3120000002',
      correo: 'vanessac@villadelmar.com',
      Turno: [{ dia: 'Lunes', horaInicio: '9:00 am', horaSalida: '3:00 pm' },
      { dia: 'Miércoles', horaInicio: '9:00 am', horaSalida: '3:00 pm' },
      { dia: 'Viernes', horaInicio: '9:00 am', horaSalida: '2:00 pm' }]
    },
  ]
  verModal: boolean = false;

  constructor() {
    this.filteredStaff = this.personal;
  }

  filtrarStaff(): void {
    this.filteredStaff = this.personal.filter(staff => {
      return (
        (staff.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
        (staff.cargo.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    });
  }
  cerrarModal(): void {
    this.verModal = false;
  }

  asignarTarea(): void {
  
    this.cerrarModal;
    // Muestra la alerta de SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      position: 'top-end',
      toast: true,
      showConfirmButton: false,
      timer: 3000
    });
  }

}
