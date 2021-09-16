import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentYear = 0;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.decodedToken === undefined) { localStorage.removeItem('token'); }
    this.currentYear = new Date().getFullYear();

  }


}


