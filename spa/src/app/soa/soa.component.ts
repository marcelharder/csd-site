import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { GeneralService } from '../_services/general.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-soa',
  templateUrl: './soa.component.html',
  styleUrls: ['./soa.component.css'],
})
export class SoaComponent implements OnInit {
  baseUrl = environment.apiUrl;
  constructor(
    private router: Router,
    private alertify: AlertifyService,
    private gen: GeneralService) {}

  ngOnInit(): void {}
  linkToCSD() { window.location.href = 'http://77.173.53.32:8046';}

  showPresentatie(id: number) { 
    //window.open(this.baseUrl + 'getPDF/1');
    window.open("https://docs.google.com/presentation/d/1vGzApLXgRND9iEnoPrPLwOggLpljfrr-S5sfr6XRu6M/edit?usp=sharing");
  }

  showDemo(id: number) {
    this.alertify.confirm('Your login credentials are: UN: marcel PWD: password',
    () => {if (id === 1) { window.open('http://77.173.53.32:8086'); }})
 }

}
