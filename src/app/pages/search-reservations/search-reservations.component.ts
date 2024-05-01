import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-reservations',
  templateUrl: './search-reservations.component.html',
  styleUrl: './search-reservations.component.scss'
})
export class SearchReservationsComponent {
  entradaDate: string = '';
  salidaDate: string = '';
  cantidadPersonas: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.entradaDate = params['checkIn'];
      this.salidaDate = params['checkOut'];
      this.cantidadPersonas = params['cantidad'];
    });
  }
  

}
