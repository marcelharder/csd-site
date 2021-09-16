import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { environment } from 'src/environments/environment';
import { GeneralService } from '../_services/general.service';

@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.component.html',
  styleUrls: ['./waitlist.component.css']
})
export class WaitlistComponent implements OnInit {
  baseUrl = environment.apiUrl;
  presentationUrl = '';
  constructor(private alertify: AlertifyService, private gen: GeneralService) { }

  ngOnInit(): void {  }

  showPresentatie(id: number) {
   // window.open(this.baseUrl + 'getPDF/2');
   this.gen.getPresentationUrl('wait').subscribe((next)=>{ this.presentationUrl = next;  window.open(this.presentationUrl); })
  }

  showDemo(id: number) { window.open('http://77.163.193.248:8083');}

}
