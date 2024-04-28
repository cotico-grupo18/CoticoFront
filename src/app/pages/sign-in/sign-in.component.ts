import { Component } from '@angular/core';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../shared/model/staff';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  staff: Staff[] = [];

  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    this.cargarStaff();
  }

  cargarStaff() {
    this.staffService.getStaff().subscribe((data:Staff[]) => {
      this.staff = data;
      console.log(data);
    });
  }
}
