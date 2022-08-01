import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserPortalService {
  readonly BaseURI = 'https://localhost:44333/api';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  //get method for getting user dashboard data
  getUserDashboardDetails() {
    return this.http.get(this.BaseURI + '/UserProfile/GetUserData');
  }

  //get method for getting all products
  getAllProducts() {
    return this.http.get(this.BaseURI + '/Products/GetAllProducts');
  }

  //get method for getting product details
  getProductDetails(id) {
    return this.http.get(this.BaseURI + `/Products/GetProductDetails/${id}`);
  }

  //post method for buying products
  buyProduct(body) {
    return this.http.post(this.BaseURI + '/UserProfile/BuyProduct', body);
  }

  //post method for paying emi installments
  payInstallments(body) {
    return this.http.post(
      this.BaseURI + '/UserProfile/PayEmiInstallment',
      body
    );
  }
}
