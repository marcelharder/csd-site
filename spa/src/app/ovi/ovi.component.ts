import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ovi',
  templateUrl: './ovi.component.html',
  styleUrls: ['./ovi.component.css']
})
export class OviComponent implements OnInit {
  baseUrl = environment.apiUrl;

  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {  }
  linkToCSD() { window.location.href = 'http://77.173.53.32:8046'; }
  showPresentatie(id: number) { window.open(this.baseUrl + 'getPDF/3'); }
  showDemo(id: number) {
    this.alertify.confirm('Your login credentials are: UN: marcel PWD: password',
    () => { if (id === 1) { window.open('http://77.173.53.32:8047'); } })
  }

}
