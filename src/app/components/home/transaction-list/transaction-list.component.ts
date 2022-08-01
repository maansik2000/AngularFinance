import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDashboardModel } from 'src/app/models/user-dashboard-model';
import { UserPortalService } from 'src/app/Services/user-portal.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  searchValue: string;
  searchUserValue: string;
  paginationNumber2: number = 1;
  data: UserDashboardModel;

  constructor(
    private router: Router,
    private service: UserPortalService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.service.getUserDashboardDetails().subscribe(
      (res: UserDashboardModel) => {
        this.data = res;
      },
      (err) => {
        this.toastr.error(err.error.message);
      }
    );
    console.log(this.data.transactionHistory);
  }

  //filtering the table as per the serch value
  SearchUser() {
    if (this.searchUserValue == '') {
      this.ngOnInit();
    } else {
      this.data.transactionHistory = this.data.transactionHistory.filter(
        (res) => {
          return res.productName
            .toLocaleLowerCase()
            .match(this.searchUserValue.toLocaleLowerCase());
        }
      );
    }
  }
}
