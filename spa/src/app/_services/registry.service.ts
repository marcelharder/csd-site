import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Registry } from '../_models/registry';
import { PaginatedResult } from '../_models/pagination';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RegistryDetails } from '../_models/registrydetails';

@Injectable()
export class RegistryService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRegistries(id: number, PageNumber?, PageSize?): Observable<PaginatedResult<Registry[]>> {
    const paginatedResult: PaginatedResult<Registry[]> = new PaginatedResult<Registry[]>();
    let params = new HttpParams();
    // tslint:disable-next-line:max-line-length
    if (PageNumber != null && PageSize != null) {
      params = params.append('PageNumber', PageNumber);
      params = params.append('PageSize', PageSize);
    }

    return this.http.get<Registry[]>(this.baseUrl + 'getRegistryList/' + id, { observe: 'response', params }).pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      }
      )
    )
  }

  getRegistryDetails(id: number) { return this.http.get<RegistryDetails>(this.baseUrl + 'CardiohelpDetails/' + id) }

  // tslint:disable-next-line:max-line-length
  updateRegistry(userId: number, reg: RegistryDetails) { return this.http.post<string>(this.baseUrl + 'updateRecord/' + userId, reg, { responseType: 'text' as 'json' } ) }

  findRegistry(id: string) { return this.http.get<string>(this.baseUrl + 'getRecordAvailable/' + id, { responseType: 'text' as 'json' }) }

  getRegistryDetailsFromCassetteId(cassetteid: string) { return this.http.get<RegistryDetails>(this.baseUrl + 'CardiohelpDetailsFromCassette/' + cassetteid) }

  addRegistry(cassetteNo: string) {return this.http.get<RegistryDetails>(this.baseUrl + 'addNewRecord/' + cassetteNo)}


}
