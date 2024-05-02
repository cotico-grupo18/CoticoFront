import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reports-and-statistics',
  templateUrl: './reports-and-statistics.component.html',
  styleUrl: './reports-and-statistics.component.scss'
})
export class ReportsAndStatisticsComponent {
  generarReporte(): void {
    const divImagenObservaciones = document.getElementById("imagenObservaciones");
    if (divImagenObservaciones) {
      const imagen = document.getElementById("imagen") as HTMLImageElement;
      if (imagen) {
        imagen.src = "assets/img/grafico.png";
      }

      divImagenObservaciones.style.display = "block";
    }
  }

  guardarObservaciones(): void {
    Swal.fire({
      icon: 'success',
      title: '¡Observaciones guardadas!',
      text: 'Se han guardado las observaciones correctamente.',
    });
  }

}
