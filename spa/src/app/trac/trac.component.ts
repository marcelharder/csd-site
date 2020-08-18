import { Component, OnInit } from "@angular/core";
import { AlertifyService } from "../_services/alertify.service";

@Component({
  selector: "app-trac",
  templateUrl: "./trac.component.html",
  styleUrls: ["./trac.component.css"],
})
export class TracComponent implements OnInit {
  page = 1;

  constructor(private alertify: AlertifyService) {}

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

  displayPage(no: number) {
    this.page = no;
  }
  linkToCSD() {
    window.location.href = 'http://77.173.53.32:8046';
  }
  showPresentatie(id: number) {
    window.open('https://docs.google.com/presentation/d/1e7kTDtSyxp51NOzL0CjG4oaE6zNQuu0I4kJ8xU2SSLE/edit?usp=sharing');
    /* if (id === 1) {
      window.open("");
    } else {
      this.alertify.message("Under development, check back ...");
    } */
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
