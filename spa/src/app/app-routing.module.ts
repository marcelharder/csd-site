import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistriesResolver } from './_resolvers/RegistriesResolver';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
import { SoaComponent } from './soa/soa.component';
import { WaitlistComponent } from './waitlist/waitlist.component';
import { OviComponent } from './ovi/ovi.component';
import { CdaComponent } from './cda/cda.component';
import { TracComponent } from './trac/trac.component';
import { EchoComponent } from './echo/echo.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'soa', component: SoaComponent },
  { path: 'waitlist', component: WaitlistComponent },
  { path: 'ovi', component: OviComponent },
  { path: 'cda', component: CdaComponent },
  { path: 'trac', component: TracComponent },
  { path: 'echo', component: EchoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tutorials/:id', component: TutorialsComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [

    { path: 'users', component: UsersComponent },






      // { path: 'profile/:id', component: ProfileComponent, resolve: { user: ProfileResolver }, canDeactivate: [PreventUnsavedChanges] },
      // { path: 'surgeon', component: SurgeonComponent },
      // { path: 'admin', component: AdminComponent },
      // { path: 'register', component: RegisterComponent },
      // { path: 'updateUser', component: UpdateUserComponent },
      // { path: 'companyadmin', component: CompanyadminComponent },
      // { path: 'addCompanyValve/:id', component: AddCompanyValveComponent, resolve: {valve: ValveResolver} },
      // { path: 'superuser', component: SuperuserComponent },
      // { path: 'search', component: SearchserialComponent },
      // { path: 'tutorials', component: TutorialsComponent },
      // { path: 'statistics', component: StatisticsComponent },
      // { path: 'companysettings/:id', component: SettingsCompanyComponent },
      // { path: 'messages', component: MessageComponent, resolve: {messages: MessagesResolver} },
      // { path: 'expiry/:id', component: ExpiryComponent, resolve: {products: ExpiringProductsResolver} },
      // { path: 'addProduct/:id', component: AddProductComponent, resolve: {valve: ValveResolver} },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
