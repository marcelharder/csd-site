import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cda',
  templateUrl: './cda.component.html',
  styleUrls: ['./cda.component.css']
})
export class CdaComponent implements OnInit {
  baseUrl = environment.apiUrl;

  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
  }
  linkToCSD() { window.location.href = 'http://77.173.53.32:8046'; }
  showPresentatie(id: number) {
    // window.open(this.baseUrl + 'getPDF/4');
    window.open("https://docs.google.com/presentation/d/1Tg86Gr3_ubZL-O8ev137nRNmt0Lj63vc9MOO8mCrAmI/edit?usp=sharing");
    }
  showDemo(id: number) {
    this.alertify.confirm('Your login credentials are: UN: demo PWD: password',
      () => { if (id === 1) { window.open('http://77.173.53.32:8047'); } })
  }
}
