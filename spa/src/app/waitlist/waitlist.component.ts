import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.component.html',
  styleUrls: ['./waitlist.component.css']
})
export class WaitlistComponent implements OnInit {
  baseUrl = environment.apiUrl;
  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
  }
  linkToCSD() { window.location.href = 'http://77.173.53.32:8046'; }
  showPresentatie(id: number) { 
    //window.open(this.baseUrl + 'getPDF/2');
    window.open("https://docs.google.com/presentation/d/1qTv-7DT9ARw_OpeTSoWx1nfmm6Nxc2FLRSDk6c3jcJU/edit?usp=sharing");
  }
  showDemo(id: number) {
     this.alertify.confirm('Your login credentials are: UN: marcel PWD: password', ()=>{if (id === 1) { window.open('http://77.173.53.32:8083'); }})
  }

}
