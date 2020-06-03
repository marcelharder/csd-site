import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-cda',
  templateUrl: './cda.component.html',
  styleUrls: ['./cda.component.css']
})
export class CdaComponent implements OnInit {

  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
  }
  linkToCSD() { window.location.href = 'http://77.173.53.32:8046'; }

  showPresentatie(id: number) {
    if (id === 1) { window.open("https://docs.google.com/presentation/d/1Tg86Gr3_ubZL-O8ev137nRNmt0Lj63vc9MOO8mCrAmI/edit?usp=sharing"); }
    else{
      this.alertify.message('Under development, check back ...');
    }}
 showDemo(id: number) {
    this.alertify.confirm("Your login credentials are: UN: marcel PWD: password", ()=>{if (id === 1) { window.open("http://77.173.53.32:8047"); }})
 }
}
