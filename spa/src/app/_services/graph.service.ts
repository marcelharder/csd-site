import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GraphService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    /* getAortic(id: number) { return this.http.get<GraphItem[]>(this.baseUrl + 'users/' + id + '/graph/1'); }
    getMitral(id: number) { return this.http.get<GraphItem[]>(this.baseUrl + 'users/' + id + '/graph/2'); }
    getRings(id: number) { return this.http.get<GraphItem[]>(this.baseUrl + 'users/' + id + '/graph/3'); }
    getConduits(id: number) { return this.http.get<GraphItem[]>(this.baseUrl + 'users/' + id + '/graph/4'); } */

    getPint(id: number, registryId: number) {
        return this.http.get<number[]>(
            this.baseUrl + 'users/' + id + '/csv/' + registryId + '/parameter/' + 1);
    }
    getPart(id: number, registryId: number) {
        return this.http.get<number[]>(
            this.baseUrl + 'users/' + id + '/csv/' + registryId + '/parameter/' + 2);
    }
    getSvO2(id: number, registryId: number) {
        return this.http.get<number[]>(
            this.baseUrl + 'users/' + id + '/csv/' + registryId + '/parameter/' + 3);
    }
    getTemp(id: number, registryId: number) {
        return this.http.get<number[]>(
            this.baseUrl + 'users/' + id + '/csv/' + registryId + '/parameter/' + 4);
    }
}
