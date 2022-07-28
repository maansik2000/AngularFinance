import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDashboardModel } from 'src/app/models/user-dashboard-model';
import { UserPortalService } from 'src/app/Services/user-portal.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  searchValue: string;
  searchUserValue: string;
  paginationNumber2: number = 1;
  data: UserDashboardModel;

  constructor(
    private router: Router,
    private service: UserPortalService,
    private toastr: ToastrService
  ) {}
  date = moment();
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
