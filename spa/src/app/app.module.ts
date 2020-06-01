import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {TimeAgoPipe} from 'time-ago-pipe';
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
import { HemodynamicsComponent } from './hemodynamics/hemodynamics.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthService } from './_services/auth.service';

import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './_guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { EditValveComponent } from './ValveDefinitions/editValve/editValve.component';
import { ListOfValveDefinitionsComponent } from './ValveDefinitions/listOfValveDefinitions/listOfValveDefinitions.component';
import { ListHospitalsForRefComponent } from './companyadmin/list-hospitals-for-ref/list-hospitals-for-ref.component';
import { ExpiryComponent } from './companyadmin/expiry/expiry.component';
import { SettingsCompanyComponent } from './companyadmin/settings-company/settings-company.component';
import { CompanyadminComponent } from './companyadmin/companyadmin.component';
import { AddValveComponent } from './add-valve/add-valve.component';
import { HospitalService } from './_services/hospital.service';
import { GeneralService } from './_services/general.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { HemodynamicsService } from './_services/hemodynamics.service';
import { VendorService } from './_services/vendor.service';
import { DropService } from './_services/drop.service';
import { ValveService } from './_services/valve.service';
import { UserService } from './_services/user.service';
import { ValveResolver } from './_resolvers/ValveResolver';
import { AddCompanyValveComponent } from './companyadmin/AddCompanyValve/AddCompanyValve.component';
import { ListValveComponent } from './list-valve/list-valve.component';
import { CommunicationComponent } from './communication/communication.component';
import { SuperuserComponent } from './superuser/superuser.component';
import { EditHospitalComponent } from './editHospital/editHospital.component';
import { MessageComponent } from './companyadmin/messages/message.component';
import { MessagesResolver } from './_resolvers/MessageResolver';
import { HospitalMessagesComponent } from './editHospital/hospital-messages/hospital-messages.component';
import { ExpiringProductsResolver } from './_resolvers/ExpiringProductsResolver';
import { SearchserialComponent } from './companyadmin/searchserial/searchserial.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileResolver } from './_resolvers/ProfileResolver';
import { PhotoEditorComponent } from './photo-uploader/photoEditor.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { RegisterComponent } from './admin/register/register.component';
import { UpdateUserComponent } from './admin/updateUser/updateUser.component';
import { GraphService } from './_services/graph.service';
import { List_TransfersComponent } from './companyadmin/list_Transfers/list_Transfers.component';
import { RegistryDetailsComponent } from './registryDetails/registryDetails.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ListOfRegistriesComponent } from './list-of-registries/list-of-registries.component';
import { RegistriesResolver } from './_resolvers/RegistriesResolver';
import { RegistryService } from './_services/registry.service';
import { CassetteExplainComponent } from './cassette-explain/cassette-explain.component';
import { ExplainHemodynamicsComponent } from './explain-hemodynamics/explain-hemodynamics.component';
import { HemoUploaderComponent } from './hemo-uploader/hemo-uploader.component';
import { MyLineChartComponent } from './_charts/my-line-chart/my-line-chart.component';
import { PwpChartComponent } from './_charts/pwp-chart/pwp-chart.component';
import { PapChartComponent } from './_charts/pap-chart/pap-chart.component';
import { TempChartComponent } from './_charts/temp-chart/temp-chart.component';


export function tokenGetter() { return localStorage.getItem('token'); }

@NgModule({
   declarations: [
      TimeAgoPipe,
      AppComponent,
      HomeComponent,
      AboutComponent,
      NavMenuComponent,
      SettingsComponent,
      HemodynamicsComponent,
      EditValveComponent,
      ListOfValveDefinitionsComponent,
      ListHospitalsForRefComponent,
      SettingsCompanyComponent,
      ExpiryComponent,
      CompanyadminComponent,
      ListValveComponent,
      AddValveComponent,
      AddCompanyValveComponent,
      CommunicationComponent,
      SuperuserComponent,
      EditHospitalComponent,
      MessageComponent,
      HospitalMessagesComponent,
      SearchserialComponent,
      ProfileComponent,
      PhotoEditorComponent,
      RegisterComponent,
      UpdateUserComponent,
      List_TransfersComponent,
      RegistryDetailsComponent,
      UsersComponent,
      LoginComponent,
      ListOfRegistriesComponent,
      CassetteExplainComponent,
      ExplainHemodynamicsComponent,
      HemoUploaderComponent,
      MyLineChartComponent,
      PwpChartComponent,
      PapChartComponent,
      TempChartComponent,

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
             tokenGetter: tokenGetter,
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
        PreventUnsavedChanges,
        ProfileResolver,
        GraphService,
        RegistryService
        ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
