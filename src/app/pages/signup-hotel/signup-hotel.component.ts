import { Component, ElementRef } from '@angular/core';
import 'bootstrap';
import { Popover } from 'bootstrap';


@Component({
  selector: 'app-signup-hotel',
  templateUrl: './signup-hotel.component.html',
  styleUrl: './signup-hotel.component.scss'
})
export class SignupHotelComponent {

  popoverInstance: Popover | null = null;

  constructor(private elementRef: ElementRef) {}

  /* Popover */
  mostrarPopover(): void {
    const iconElement = this.elementRef.nativeElement.querySelector('#contraseñaInfoIcon');
    if (!iconElement) return;

    if (!this.popoverInstance) {
      this.popoverInstance = new Popover(iconElement, {
        container: 'body',
        title: 'Información de Contraseña',
        content: 'La contraseña debe contener al menos 8 caracteres, incluyendo letras mayúsculas, minúsculas, números y caracteres especiales.',
        placement: 'top',
        trigger: 'manual',
        customClass: 'popover-custom'
      });
    }
    // Mostrar el popover cuando el mouse entra al icono
    this.popoverInstance.show();
  }

  ocultarPopover(): void {
    if (this.popoverInstance) {
      this.popoverInstance.hide();
    }
  }
}
