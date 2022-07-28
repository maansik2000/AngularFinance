import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserPortalService {
  readonly BaseURI = 'https://localhost:44333/api';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  getUserDashboardDetails() {
    return this.http.get(this.BaseURI + '/UserProfile/GetUserData');
  }
  getAllProducts() {
    return this.http.get(this.BaseURI + '/Products/GetAllProducts');
  }
  getProductDetails(id) {
    return this.http.get(this.BaseURI + `/Products/GetProductDetails/${id}`);
  }

  buyProduct(body) {
    return this.http.post(this.BaseURI + '/UserProfile/BuyProduct', body);
  }

  payInstallments(body) {
    return this.http.post(
      this.BaseURI + '/UserProfile/PayEmiInstallment',
      body
    );
  }
}
