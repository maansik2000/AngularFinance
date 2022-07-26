import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from '../models/User-data';
import { UserDetailsModel } from '../models/user-details-model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  readonly BaseURI = 'https://localhost:44333/api';

  getAdminProfile() {
    // var tokenHeader = new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')});
    // return this.http.get(this.BaseURI + '/UserProfile', {headers : tokenHeader});
    return this.http.get(this.BaseURI + '/Admin/UserProfile');
  }

  getAllUserData() {
    return this.http.get(this.BaseURI + '/Admin/getAllUsers');
  }

  getUserDetails(id: string) {
    return this.http.get(this.BaseURI + `/Admin/GetUserDetails/${id}`);
  }

  formModel = this.fb.group({
    TotalCredits: ['', Validators.required],
    CardNumber: ['', Validators.required],
    validity: ['', Validators.required],
  });

  ActivateAccount(id, bankDetails: UserDetailsModel) {
    var body = {
      bankname: bankDetails.data.bankname,
      branch: bankDetails.data.branch,
      ifscCode: bankDetails.data.ifscCode,
      accountNumber: bankDetails.data.accountNumber,
      CardType: bankDetails.data.cardType,
      RemainingBalance: this.formModel.value.TotalCredits,
      amountSpent: 0.0,
      totalCredit: this.formModel.value.TotalCredits,
      cardNumber: this.formModel.value.CardNumber,
      Validity: this.formModel.value.validity,
      cardStatus: 'Activated',
      bankId: bankDetails.data.bankId,
      userId: id,
    };
    return this.http.put(this.BaseURI + `/Admin/ActivateAccount/${id}`, body);
  }
}
