import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HemoModel } from '../_models/HemoModel';

@Injectable()
export class HemodynamicsService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {  }

     deleteHemo(id: number) { return this.http.delete<string>(this.baseUrl + 'hemodynamics/' + id); }
     uploadHemoFile(userId: number, id: number, stuff: FormData) {
         return this.http.post<string>(this.baseUrl + 'users/' + userId + '/hemoFile/' + id, stuff, { responseType: 'text' as 'json' }); }
     findHemoFile(userId: number, registryId: number) { 
         return this.http.get<string>(this.baseUrl + 'users/' + userId + '/isHemoFileAvailable/' + registryId, { responseType: 'text' as 'json' }); }
}
