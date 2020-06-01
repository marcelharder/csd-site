import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Hospital } from '../_models/Hospital';

@Injectable()
export class GeneralService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {  }

    getHospital() {return this.http.get<Hospital>(this.baseUrl + 'hospital'); }
    getVendorId(vendorname: string) { return this.http.get<number>(this.baseUrl + 'vendorId/' + vendorname); }
    // tslint:disable-next-line:max-line-length
    getCountryName(countryCode: string) { return this.http.get<string>(this.baseUrl + 'countryName/' + countryCode, { responseType: 'text' as 'json' }); }
    // tslint:disable-next-line: max-line-length
    getHospitalFromHospitalCode(code: number) {return this.http.get<string>(this.baseUrl + 'hospitalName/' + code, { responseType: 'text' as 'json' });}
}
