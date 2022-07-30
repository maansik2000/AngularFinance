import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.scss'],
})
export class AdminCreateComponent implements OnInit {
  constructor(
    private router: Router,
    private service: AdminService,
    private toastr: ToastrService
  ) {}
  formModel = {
    email: '',
    username: '',
    password: 'admin',
    fullName: '',
  };
  ngOnInit(): void {}
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
  onSubmit(form: NgForm) {
    this.service.AddAdmin(form).subscribe(
      (res: any) => {
        this.toastr.success('Successfully created Admin User');
      },
      (err) => {
        this.toastr.error('Something went wrong');
      }
    );
  }
}
