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
  presentationUrl = '';
  constructor(
    private router: Router,
    private alertify: AlertifyService,
    private gen: GeneralService) {}

  ngOnInit(): void {}

  showPresentatie(id: number) {
    // window.open(this.baseUrl + 'getPDF/1');
     this.gen.getPresentationUrl('soa').subscribe((next)=>{ this.presentationUrl = next;  window.open(this.presentationUrl); })
  }

  showDemo(id: number) {
    this.alertify.confirm('Your login credentials are: UN: demo PWD: password',
    () => {if (id === 1) { window.open('http://77.173.53.32:8086'); }})
 }

 showVideo(){  this.router.navigate(['/tutorials/' + 1]);}

}
