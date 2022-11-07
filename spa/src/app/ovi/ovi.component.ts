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
  presentationUrl = '';

  constructor(private alertify: AlertifyService, private gen: GeneralService) { }

  ngOnInit(): void {  }
  


  showPresentatie(id: number) {
    // window.open(this.baseUrl + 'getPDF/3');
    window.open("https://docs.google.com/presentation/d/1mD0BFR3N2W7eoH5tpTn8tbb0AvqoOqcf6kp3CBDrKIk/edit?usp=sharing");
    // this.gen.getPresentationUrl('ovi').subscribe((next)=>{ this.presentationUrl = next;  window.open(this.presentationUrl); })
   }




  showDemo(id: number) {


    if(id === 1){ this.alertify.confirm('Your login credentials are: UN: demosuperuser PWD: password',
    () => { window.open('http://206.189.4.65:8045');  })}

    if(id === 2){ this.alertify.confirm('Your login credentials are: UN: demovendor PWD: password',
    () => { window.open('http://206.189.4.65:8045');  })}

    if(id === 3){ this.alertify.confirm('Your login credentials are: UN: demosurgeon PWD: password',
    () => { window.open('http://206.189.4.65:8045');  })}




  }

}
