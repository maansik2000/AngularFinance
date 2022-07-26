import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/models/product';
import { UserPortalService } from 'src/app/Services/user-portal.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  data: Products[];
  constructor(
    private router: Router,
    private service: UserPortalService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.service.getAllProducts().subscribe(
      (res: Products[]) => {
        this.data = res;
      },
      (err) => {
        this.toastr.error(err.error.message);
      }
    );
  }
  handleClick(id) {
    console.log(id);
    this.router.navigate(['/home/products', id]);
  }
}
