import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { DropItem } from '../_models/DropItem';

@Injectable()
export class DropService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getOptions(no: number) {   return this.http.get<DropItem[]>(this.baseUrl + 'dropdownlist/' + no); }

  }
