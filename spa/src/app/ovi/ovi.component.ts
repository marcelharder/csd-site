import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ovi',
  templateUrl: './ovi.component.html',
  styleUrls: ['./ovi.component.css']
})
export class OviComponent implements OnInit {
  baseUrl = environment.apiUrl;

  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {  }
  linkToCSD() { window.location.href = 'http://77.173.53.32:8046'; }
  showPresentatie(id: number) { window.open(this.baseUrl + 'getPDF/3'); }
  showDemo(id: number) {


    if(id === 1){ this.alertify.confirm('Your login credentials are: UN: demosuperuser PWD: password',
    () => { window.open('http://77.173.53.32:8045');  })}

    if(id === 2){ this.alertify.confirm('Your login credentials are: UN: demovendor PWD: password',
    () => { window.open('http://77.173.53.32:8045');  })}

    if(id === 3){ this.alertify.confirm('Your login credentials are: UN: demosurgeon PWD: password',
    () => { window.open('http://77.173.53.32:8045');  })}




  }

}
