import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {FileUploadModule} from 'ng2-file-upload';
import {ChartsModule} from 'ng2-charts'
import {GoogleChartsModule} from 'angular-google-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {PaginationModule} from 'ngx-bootstrap/pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SettingsComponent } from './settings/settings.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthService } from './_services/auth.service';

import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './_guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { HospitalService } from './_services/hospital.service';
import { GeneralService } from './_services/general.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { HemodynamicsService } from './_services/hemodynamics.service';
import { VendorService } from './_services/vendor.service';
import { DropService } from './_services/drop.service';
import { ValveService } from './_services/valve.service';
import { UserService } from './_services/user.service';
import { ValveResolver } from './_resolvers/ValveResolver';
import { MessagesResolver } from './_resolvers/MessageResolver';
import { ExpiringProductsResolver } from './_resolvers/ExpiringProductsResolver';
import { ProfileResolver } from './_resolvers/ProfileResolver';
import { PhotoEditorComponent } from './photo-uploader/photoEditor.component';
import { GraphService } from './_services/graph.service';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegistriesResolver } from './_resolvers/RegistriesResolver';
import { RegistryService } from './_services/registry.service';
import { MyLineChartComponent } from './_charts/my-line-chart/my-line-chart.component';
import { PwpChartComponent } from './_charts/pwp-chart/pwp-chart.component';
import { PapChartComponent } from './_charts/pap-chart/pap-chart.component';
import { TempChartComponent } from './_charts/temp-chart/temp-chart.component';
import { ContactComponent } from './contact/contact.component';
import { SoaComponent } from './soa/soa.component';
import { WaitlistComponent } from './waitlist/waitlist.component';
import { OviComponent } from './ovi/ovi.component';
import { CdaComponent } from './cda/cda.component';
import { TracComponent } from './trac/trac.component';
import { EchoComponent } from './echo/echo.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { OgiComponent } from './ogi/ogi.component';
import { PdfService } from './_services/pdf.service';


export function tokenG() { return localStorage.getItem('token'); }

@NgModule({
   declarations: [			
      AppComponent,
      HomeComponent,
      AboutComponent,
      NavMenuComponent,
      SettingsComponent,
      PhotoEditorComponent,
      UsersComponent,
      LoginComponent,
      MyLineChartComponent,
      PwpChartComponent,
      PapChartComponent,
      TempChartComponent,
      ContactComponent,
      SoaComponent,
      WaitlistComponent,
      OviComponent,
      CdaComponent,
      TracComponent,
      EchoComponent,
      TutorialsComponent,
      OgiComponent,
      
   ],
   imports: [
      CommonModule,
       HttpClientModule,
      FileUploadModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      PaginationModule,
      BrowserModule,
      ChartsModule,
      ReactiveFormsModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      GoogleChartsModule,
      PaginationModule.forRoot(),
      BsDatepickerModule.forRoot(),
      JwtModule.forRoot({
         config: {
             tokenGetter: tokenG,
             whitelistedDomains: ['localhost:5000'],
             blacklistedRoutes: ['localhost:5000/api/auth']
         }
     }),
   ],
   providers: [
      AuthService,
       AlertifyService,
        AuthGuard,
        ErrorInterceptorProvider,
        GeneralService,
        HemodynamicsService,
        HospitalService,
        VendorService,
        DropService,
        ValveService,
        UserService,
        ValveResolver,
        MessagesResolver,
        RegistriesResolver,
        ExpiringProductsResolver,
        ProfileResolver,
        GraphService,
        RegistryService,
        PdfService
        ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
