import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { environment } from 'src/environments/environment';
import { GeneralService } from '../_services/general.service';

@Component({
  selector: 'app-cda',
  templateUrl: './cda.component.html',
  styleUrls: ['./cda.component.css']
})
export class CdaComponent implements OnInit {
  baseUrl = environment.apiUrl;
  
  presentationUrl = 'https://docs.google.com/presentation/d/1Tg86Gr3_ubZL-O8ev137nRNmt0Lj63vc9MOO8mCrAmI/edit?usp=sharing';

  constructor(private alertify: AlertifyService, private gen:GeneralService) { }

  ngOnInit(): void {  }
 

  showPresentatie(id: number) {   window.open(this.presentationUrl); }

  showDemo(id: number) {
    this.alertify.confirm('Your login credentials are: UN: demo PWD: password',
      () => { if (id === 1) { window.open('http://77.163.193.248:8047'); } })
  }
}
