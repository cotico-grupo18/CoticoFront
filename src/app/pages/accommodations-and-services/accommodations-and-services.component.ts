import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accommodations-and-services',
  templateUrl: './accommodations-and-services.component.html',
  styleUrl: './accommodations-and-services.component.scss'
})
export class AccommodationsAndServicesComponent {
  searchQuery: string = '';
  filteredItems: any[] = [];
  filteredServices: any[] = [];
  items: any[] = [
    { imagen: 'assets/img/rooms/Habitacion2.jpg', nombre: 'Habitación 1A', cantidadPersonas: 2, servicios: 'TV, Aire acondicionado, Nevera, Balcón', precioNoche: '$100.000' },
    { imagen: 'assets/img/rooms/Habitacion3.jpg', nombre: 'Habitación 4A', cantidadPersonas: 2, servicios: 'TV, Aire acondicionado, Nevera, Cocina sencilla', precioNoche: '$100.000' },
    { imagen: 'assets/img/rooms/Habitacion1.jpg', nombre: 'Habitación 3B', cantidadPersonas: 1, servicios: 'TV, Aire acondicionado, Nevera, Balcón', precioNoche: '$100.000' },
    { imagen: 'assets/img/rooms/Habitacion5.jpeg', nombre: 'Habitación 1C', cantidadPersonas: 2, servicios: 'TV, Aire acondicionado, Nevera, Cocina sencilla, Servicio a la habitación, Balcón', precioNoche: '$180.000' },
    { imagen: 'assets/img/rooms/Habitacion4.jpg', nombre: 'Habitación 2C', cantidadPersonas: 2, servicios: 'TV, Aire acondicionado, Nevera, Cocina sencilla, Servicio a la habitación, Balcón', precioNoche: '$150.000' }
  ]

  services: any[] = [
    {
      nombreServicio: 'Cancha de voleibol',
      imagen: 'assets/img/services/Servicio2.jpg',
      cantidadPersonas: 10,
      disponibilidad: 'Lun: 8:00 a.m - 18:00 p.m, Mar: 8:00 a.m - 18:00 p.m, Mier: 8:00 a.m - 18:00 p.m, Juev: 8:00 a.m - 18:00 p.m, Vier: 8:00 a.m - 18:00 p.m',
      planes: 'Plan medio tiempo - $15.000, Plan completo - $25.000'
    },
    {
      nombreServicio: 'Piscina',
      imagen: 'assets/img/services/Servicio1.jpg',
      cantidadPersonas: 10,
      disponibilidad: 'Lun: 10:00 a.m- 22:00 p.m, Mar: 10:00 a.m- 22:00 p.m, Mier: 10:00 a.m- 22:00 p.m, Juev: 10:00 a.m- 22:00 p.m, Vier: 10:00 a.m- 22:00 p.m',
      planes: 'Plan básico - $20.000, Plan familiar - $35.000'
    }
  ];

  constructor() {
    this.filteredItems = this.items;
  }

  filtrarItems(): void {
    this.filteredItems = this.items.filter(item => {
      return (
        (item.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    });
  }

  filtrarServicios(): void {
    this.filteredServices = this.services.filter(servicio => {
      return (
        (servicio.nombreServicio.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    });
  }

}
