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
  csdUrl = environment.csdUrl;
  presentationUrl = '';

  constructor(private alertify: AlertifyService, private gen:GeneralService) { }

  ngOnInit(): void {
  }
  linkToCSD() { window.location.href = this.csdUrl; }

  showPresentatie(id: number) 
  {
    // window.open(this.baseUrl + 'getPDF/4');
    this.gen.getPresentationUrl('cda').subscribe((next)=>{ this.presentationUrl = next;  window.open(this.presentationUrl); })
  }

  showDemo(id: number) {
    this.alertify.confirm('Your login credentials are: UN: demo PWD: password',
      () => { if (id === 1) { window.open('http://77.173.53.32:8047'); } })
  }
}
