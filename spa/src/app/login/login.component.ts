import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  adminLogged: boolean;
  normalLogged: boolean;
  specialLogged: boolean;
  companyAdminLogged: boolean;
  companyHQLogged: boolean;
  loginFailed: boolean;

  constructor(private auth: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit(): void {
    this.adminLogged = false;
    this.normalLogged = false;
    this.specialLogged = false;
    this.companyAdminLogged = false;
    this.companyHQLogged = false;
  }
  login() {

    this.auth.login(this.model).subscribe(next => {
        this.alertify.success('Logged in successfully');
        this.loginFailed = false;
        switch (this.auth.decodedToken.role) {
            case 'admin':
                this.adminLogged = true;
                break;
            case 'surgeon':
                this.normalLogged = true;
                break;
            case 'superuser':
                this.specialLogged = true;
                break;
            case 'companyadmin':
                this.companyAdminLogged = true;
                break;
            case 'companyHQ':
                this.companyHQLogged = true;
                break;
        }
        // go to the list of procedures
        this.router.navigate(['/listOfRegistries']);

    },
        error => {
            // say log in failed, show register button
            this.alertify.error(error);
            this.loginFailed = true;
        }
    );
}

}
