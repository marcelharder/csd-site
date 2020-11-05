import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { GeneralService } from '../_services/general.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trac',
  templateUrl: './trac.component.html',
  styleUrls: ['./trac.component.css'],
})
export class TracComponent implements OnInit {
  page = 1;
  presentationUrl='';

  constructor(private alertify: AlertifyService, private gen:GeneralService) {}

  ngOnInit(): void {}

  ShowPage(no: number) {
    if (no === 1) {
      if (this.page === 1) {
        return true;
      }
    }
    if (no === 2) {
      if (this.page === 2) {
        return true;
      }
    }
    if (no === 3) {
      if (this.page === 3) {
        return true;
      }
    }
    if (no === 4) {
      if (this.page === 4) {
        return true;
      }
    }
    if (no === 5) {
      if (this.page === 5) {
        return true;
      }
    }
    return false;
  }

  displayPage(no: number) { this.page = no; }

  showPresentatie(id: number) {
    this.gen.getPresentationUrl('trac').subscribe((next)=>{ this.presentationUrl = next;  window.open(this.presentationUrl); })
  }
  showDemo(id: number) {
    this.alertify.confirm(
      'Your login credentials are: UN: m.p. harder PWD: mph@123',
      () => {
        if (id === 1) {
          window.open('http://77.173.53.32:8088');
        }
      }
    );
  }
}
