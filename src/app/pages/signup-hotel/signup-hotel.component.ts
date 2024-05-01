import { Component, ElementRef } from '@angular/core';
import 'bootstrap';
import { Popover } from 'bootstrap';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


export const paisesCiudades = [
  {
    pais: 'Colombia',
    ciudades: ['Armenia', 'Arauca', 'Barranquilla', 'Bogotá', 'Bucaramanga', 'Cali', 'Cartagena', 'Cúcuta']
  },
  {
    pais: 'Costa Rica',
    ciudades: ['Alajuela', 'Dominical', 'Heredia', 'La fortuna', 'Liberia', 'Monteverde', 'Quepos']
  },
];

@Component({
  selector: 'app-signup-hotel',
  templateUrl: './signup-hotel.component.html',
  styleUrl: './signup-hotel.component.scss'
})
export class SignupHotelComponent {
  paises: any[] = [];
  ciudades: string[] = [];
  popoverInstance: Popover | null = null;

  constructor(private elementRef: ElementRef, private router: Router) { }

  ngOnInit(): void {
    this.cargarPaises();
  }

  cargarPaises(): void {
    this.paises = paisesCiudades.map(pais => pais.pais);
  }

  cargarCiudades(event: any): void {
    const seleccionado = event.target.value;
    const paisSeleccionado = paisesCiudades.find(pais => pais.pais === seleccionado);
    if (paisSeleccionado) {
      this.ciudades = paisSeleccionado.ciudades;
    } else {
      this.ciudades = [];
    }
  }

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
    this.popoverInstance.show();
  }

  ocultarPopover(): void {
    if (this.popoverInstance) {
      this.popoverInstance.hide();
    }
  }

  validarCampos(): boolean {
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const apellido = (document.getElementById('apellido') as HTMLInputElement).value;
    const correo = (document.getElementById('correo') as HTMLInputElement).value;
    const telefono = (document.getElementById('telefono') as HTMLInputElement).value;
    const contraseña = (document.getElementById('contraseña') as HTMLInputElement).value;
    const confirmarContraseña = (document.getElementById('confirmarContraseña') as HTMLInputElement).value;
  
    if (!nombre || !apellido || !correo || !telefono || !contraseña || !confirmarContraseña) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor complete todos los campos.',
      });
      return false;
    }
  
    return true;
  }

  verificarContrasenas(): boolean {
    const contraseña = (document.getElementById('contraseña') as HTMLInputElement).value;
    const confirmarContraseña = (document.getElementById('confirmarContraseña') as HTMLInputElement).value;
    
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (contraseña !== confirmarContraseña) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden.'
      });
      return false;
    }
  
    if (!regex.test(contraseña)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La contraseña debe contener al menos 8 caracteres, incluyendo letras mayúsculas, minúsculas, números y caracteres especiales.'
      });
      return false;
    }
    return true;
  }
  
  
  continuar(): void {
    if (this.validarCampos() && this.verificarContrasenas()) {
      this.router.navigate(['/signup/last_step']);
    }
  }
  
  
}
