import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { catchError } from 'rxjs/operators';
import { Registry } from '../_models/registry';
import { RegistryService } from '../_services/registry.service';


@Injectable()
export class RegistriesResolver implements Resolve<Registry[]> {
    PageSize = 5;
    PageNumber = 1;
    constructor(private regService: RegistryService,
        private router: Router,
        private alertify: AlertifyService,
        private authService: AuthService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Registry[]> {
        return this.regService.getRegistries(this.authService.decodedToken.nameid,this.PageNumber,this.PageSize).pipe(
                catchError(error => {
                    this.alertify.error('Problem retrieving data from' + error);
                    this.router.navigate(['/home']);
                    return of(null);
                })
            );

    }
}