import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Valve } from '../_models/Valve';
import { TypeOfValve } from '../_models/TypeOfValve';
import { ExpiringProducts } from '../_models/ExpiringProducts';
import { ValveTransfer } from '../_models/ValveTransfer';

@Injectable()
export class ValveService {
    
    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getValves(soort: number, position: number) { return this.http.get<Valve[]>(this.baseUrl + 'valvesBySoort/' + soort + '/' + position);}
    getValve(id: number) { return this.http.get<Valve>(this.baseUrl + 'valveById/' + id); }
    getValveType(id: number) { return this.http.get<TypeOfValve>(this.baseUrl + 'productByNo/' + id); }

    getValveBySerial(serial: string, who: string) { // if vendor => who = '1'
    return this.http.get<Valve>(this.baseUrl + 'valveBySerial/' + serial + '/requester/' + who); }
 
    getValveBasedOnValveCode(SelectedProduct: number) { 
        return this.http.get<Valve>(this.baseUrl + 'valveBasedOnTypeOfValve/' + SelectedProduct); }

    saveValve(item: Valve) { return this.http.post(this.baseUrl + 'updatevalve', item, { responseType: 'text' as 'json' });}
    // tslint:disable-next-line:max-line-length
    getValvesByHospitalAndValveCodeId(hospital: number, code: number) { return this.http.get<Valve[]>(this.baseUrl + 'valvesByHospitalAndValveId/' + hospital + '/' + code); }
    getNewValveBasedOnValveType(id: number) { return this.http.get<Valve>(this.baseUrl + 'valveBasedOnTypeOfValve/' + id); }
    getValveExpiry(id: number) {return this.http.get<ExpiringProducts[]>(this.baseUrl + 'valveExpiry/' + id); }

    // tslint:disable-next-line:max-line-length
    getValveTransfers(userId: number, id: number){return this.http.get<ValveTransfer[]>(this.baseUrl + 'valveTransfers/' + userId + '/' + id)}
    // tslint:disable-next-line:max-line-length
    getValveTransferDetails(userId: number, id: number){return this.http.get<ValveTransfer>(this.baseUrl + 'valveTransferDetails/' + userId + '/' + id)}
    // tslint:disable-next-line:max-line-length
    addValveTransferDetails(userId: number, valveId: number){return this.http.post<ValveTransfer>(this.baseUrl + 'addValveTransfer/' + userId + '/' + valveId, {})}

    updateValveTransferDetails(userId: number, ct: ValveTransfer){return this.http.put<number>(this.baseUrl + 'updateValveTransfer/' + userId, ct)}
    

   
}
