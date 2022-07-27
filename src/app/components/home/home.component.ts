import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userDetails;
  showBurger: boolean = false;
  isSelected: boolean = false;
  currentRoute = '/home/dashboard';

  formModel = {
    joiningFeesAmount: 10000,
  };

  constructor(
    private router: Router,
    private service: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      (res) => {
        this.userDetails = res;
      },
      (err) => {
        this.toastr.error(err.error.message);
      }
    );

    this.currentRoute = this.router.url;
    localStorage.setItem('fullName', this.userDetails.fullName);
    localStorage.setItem('userId', this.userDetails.userId);
    localStorage.setItem('email', this.userDetails.email);
    console.log(this.currentRoute);
  }

  onLogout() {
    console.log('heello');
    localStorage.removeItem('token');
    localStorage.removeItem('fullName');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    this.router.navigate(['/user/login']);
  }

  handleBurger() {
    this.showBurger = !this.showBurger;
  }

  onSubmit(form: NgForm) {
    this.service.postJoiningFees(this.userDetails.userId, form.value).subscribe(
      (res) => {
        console.log(res);
        this.ngOnInit();
        this.toastr.success('Joining Fees Submitted');
      },
      (err) => {
        this.toastr.error(err.error.message);
      }
    );
  }
}