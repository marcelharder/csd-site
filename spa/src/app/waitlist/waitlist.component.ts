import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.component.html',
  styleUrls: ['./waitlist.component.css']
})
export class WaitlistComponent implements OnInit {

  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
  }
  linkToCSD() { window.location.href = "http://77.173.53.32:8046"; }
  showPresentatie(id: number) {
     if (id === 1) { window.open("https://docs.google.com/presentation/d/1qTv-7DT9ARw_OpeTSoWx1nfmm6Nxc2FLRSDk6c3jcJU/edit?usp=sharing"); }
     else{
       this.alertify.message('Under development, check back ...');
     }}
  showDemo(id: number) {
     this.alertify.confirm("Your login credentials are: UN: marcel PWD: password", ()=>{if (id === 1) { window.open("http://77.173.53.32:8083"); }})
  }

}
