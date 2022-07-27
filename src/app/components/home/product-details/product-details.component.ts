import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/models/product';
import { UserPortalService } from 'src/app/Services/user-portal.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productsDetails;
  productId: number;
  constructor(
    private router: Router,
    public service: UserPortalService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  formModel = {
    emiDuration: '',
  };
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.productId = id;
      this.service.getProductDetails(id).subscribe(
        (res) => {
          this.productsDetails = res;
          console.log(res);
        },
        (err) => {
          this.toastr.error(err.error.message);
        }
      );
    });
  }
  onSubmit(formModel: NgForm) {
    console.log(formModel.value);
  }
}
