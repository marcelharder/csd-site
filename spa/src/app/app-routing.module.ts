import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ListOfRegistriesComponent } from './list-of-registries/list-of-registries.component';
import { RegistriesResolver } from './_resolvers/RegistriesResolver';
import { CassetteExplainComponent } from './cassette-explain/cassette-explain.component';
import { ExplainHemodynamicsComponent } from './explain-hemodynamics/explain-hemodynamics.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
    { path: 'listOfRegistries', component: ListOfRegistriesComponent, resolve: {reg: RegistriesResolver}},
   
    { path: 'users', component: UsersComponent },
    { path: 'cassetteExplain', component: CassetteExplainComponent },
    { path: 'hemodynamicsExplain', component: ExplainHemodynamicsComponent },






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
