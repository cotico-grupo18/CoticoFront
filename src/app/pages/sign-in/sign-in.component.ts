import { Component } from '@angular/core';
import { Staff } from '../../shared/model/staff';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  staff: Staff[] = [];

  constructor() { }

  

  
}
