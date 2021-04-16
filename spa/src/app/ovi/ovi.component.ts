import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { environment } from 'src/environments/environment';
import { GeneralService } from '../_services/general.service';

@Component({
  selector: 'app-ovi',
  templateUrl: './ovi.component.html',
  styleUrls: ['./ovi.component.css']
})
export class OviComponent implements OnInit {
  baseUrl = environment.apiUrl;
  presentationUrl = 'https://docs.google.com/presentation/d/1mD0BFR3N2W7eoH5tpTn8tbb0AvqoOqcf6kp3CBDrKIk/edit?usp=sharing';

  constructor(private alertify: AlertifyService, private gen: GeneralService) { }

  ngOnInit(): void {  }
  

  showPresentatie(id: number) {   window.open(this.presentationUrl); }




  showDemo(id: number) {


    if(id === 1){ this.alertify.confirm('Your login credentials are: UN: demosuperuser PWD: password',
    () => { window.open('http://77.163.193.248:8045');  })}

    if(id === 2){ this.alertify.confirm('Your login credentials are: UN: demovendor PWD: password',
    () => { window.open('http://77.163.193.248:8045');  })}

    if(id === 3){ this.alertify.confirm('Your login credentials are: UN: demosurgeon PWD: password',
    () => { window.open('http://77.163.193.248:8045');  })}




  }

}
