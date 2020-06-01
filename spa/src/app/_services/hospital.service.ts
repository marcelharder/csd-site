import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Hospital } from '../_models/Hospital';
import { DropItem } from '../_models/DropItem';

@Injectable()
export class HospitalService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getVendorsInHospital() { return this.http.get<DropItem[]>(this.baseUrl + 'hospital/vendors'); }

  getListOfHospitalsWhereVendorIsActive() { return this.http.get<DropItem[]>(this.baseUrl + 'sphlist'); }

  getFullHospitalsWhereVendorIsActive() { return this.http.get<Hospital[]>(this.baseUrl + 'sphlist_full'); }

  getFullHospitalsWhereVendorIsNotActive() { return this.http.get<Hospital[]>(this.baseUrl + 'neg_sphlist_full'); }

  // tslint:disable-next-line:max-line-length
  addVendor(vendor: string, hospitalId: number) { return this.http.get<string>(this.baseUrl + 'addVendor' + '/' + vendor + '/' + hospitalId, { responseType: 'text' as 'json' }); }

  // tslint:disable-next-line:max-line-length
  removeVendor(vendor: string, hospitalId: number) { return this.http.get<string>(this.baseUrl + 'removeVendor' + '/' + vendor + '/' + hospitalId, { responseType: 'text' as 'json' }); }

  getDetails(hospitalId: number) { return this.http.get<Hospital>(this.baseUrl + 'getHospitalDetails' + '/' + hospitalId); }

  saveDetails(h: Hospital) { return this.http.post<string>(this.baseUrl + 'saveHospitalDetails', h, { responseType: 'text' as 'json' }); }

}
