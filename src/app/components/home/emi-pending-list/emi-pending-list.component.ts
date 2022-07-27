import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { UserDashboardModel } from 'src/app/models/user-dashboard-model';
import { UserPortalService } from 'src/app/Services/user-portal.service';

@Component({
  selector: 'app-emi-pending-list',
  templateUrl: './emi-pending-list.component.html',
  styleUrls: ['./emi-pending-list.component.scss'],
})
export class EmiPendingListComponent implements OnInit {
  searchValue: string;
  searchUserValue: string;
  paginationNumber2: number = 1;
  data: UserDashboardModel;
  moment = moment;
  date = new Date();
  currentDate = moment(this.date).format('YYYY-MM-DD');

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
  }

  SearchUser() {
    if (this.searchUserValue == '') {
      this.ngOnInit();
    } else {
      this.data.orderHistory = this.data.orderHistory.filter((res) => {
        return res.productName
          .toLocaleLowerCase()
          .match(this.searchUserValue.toLocaleLowerCase());
      });
    }
  }
}