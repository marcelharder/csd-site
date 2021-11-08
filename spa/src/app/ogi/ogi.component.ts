import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { GeneralService } from '../_services/general.service';

@Component({
  selector: 'app-ogi',
  templateUrl: './ogi.component.html',
  styleUrls: ['./ogi.component.css']
})
export class OgiComponent implements OnInit {
  presentationUrl = "";

  constructor(private alertify: AlertifyService, private gen: GeneralService) { }

  ngOnInit() {
  }

  showPresentatie(id: number) {
    window.open("https://docs.google.com/presentation/d/1mD0BFR3N2W7eoH5tpTn8tbb0AvqoOqcf6kp3CBDrKIk/edit?usp=sharing");
    // this.gen.getPresentationUrl('ogi').subscribe((next)=>{ this.presentationUrl = next;  window.open(this.presentationUrl); })
   }

  showDemo(){ this.alertify.confirm('Your login credentials are: UN: demovendor PWD: password',
  () => { window.open('http://87.253.157.146:8055');  })}}


