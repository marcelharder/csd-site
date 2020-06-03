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
  showPresentatie(id: number) { if (id === 1) { window.open(""); }}
  showDemo(id: number) {
     this.alertify.confirm("Your login credentials are: UN: marcel PWD: password", ()=>{if (id === 1) { window.open("http://77.173.53.32:8083"); }})
  }

}
