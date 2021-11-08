import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { GeneralService } from '../_services/general.service';
import { environment } from 'src/environments/environment';
import { PdfService } from '../_services/pdf.service';

@Component({
  selector: 'app-soa',
  templateUrl: './soa.component.html',
  styleUrls: ['./soa.component.css'],
})
export class SoaComponent implements OnInit {
  baseUrl = environment.apiUrl;
  test: any;
  presentationUrl = '';
  constructor(
    private pdf: PdfService,
    private router: Router,
    private alertify: AlertifyService,
    private gen: GeneralService) {}

  ngOnInit(): void {}

  showPresentatie(id: number) {
    window.open("https://docs.google.com/presentation/d/1vGzApLXgRND9iEnoPrPLwOggLpljfrr-S5sfr6XRu6M/edit?usp=sharing");
    // this.gen.getPresentationUrl('soa').subscribe((next)=>{ this.presentationUrl = next;  window.open(this.presentationUrl); });
      
   
  }

  showDemo(id: number) {
    this.alertify.confirm('Your login credentials are: UN: demo PWD: password',
    () => {if (id === 1) { window.open('http://87.253.157.146:8086'); }})
 }

 showVideo(){  this.router.navigate(['/tutorials/' + 1]);}

}
