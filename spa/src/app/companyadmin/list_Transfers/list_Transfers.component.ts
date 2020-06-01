import { Component, OnInit, Input } from '@angular/core';
import { ValveTransfer } from 'src/app/_models/ValveTransfer';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ValveService } from 'src/app/_services/valve.service';
import { Valve } from 'src/app/_models/Valve';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-list_Transfers',
  templateUrl: './list_Transfers.component.html',
  styleUrls: ['./list_Transfers.component.css']
})
// tslint:disable-next-line:class-name
export class List_TransfersComponent implements OnInit {
  @Input() transfers: ValveTransfer[];
  @Input() selectedValve: Valve;
  details = 0;
  currentTransfer: ValveTransfer = {
    Id:0,
    DepTime:new Date(),
    ArrTime:new Date(),
    Reason: '',
    DepartureCode: '',
    ArrivalCode: '',
    ValveId: 0
  };

  constructor(private alertify: AlertifyService,
    private auth: AuthService,
    private router: Router,
    private valveservice: ValveService) { }

  ngOnInit() { }

  cancel() {

    this.details = 0;
    this.router.navigate(['/search']);

  }

  addTransfer() {
    this.details = 1;
    this.alertify.message('adding record');
    // tslint:disable-next-line:max-line-length
    this.valveservice.addValveTransferDetails(+this.auth.decodedToken.nameid, this.selectedValve.valveId).subscribe((next) => {
      this.currentTransfer = next;

    })
    }

   updateTransfer(id: number) {
     this.details = 1;
     this.valveservice.getValveTransferDetails(+this.auth.decodedToken.nameid,id).subscribe((next)=>{
       this.currentTransfer = next;
     })
    }

   saveValveTransferDetails()
   {
    this.valveservice.updateValveTransferDetails(+this.auth.decodedToken.nameid, this.currentTransfer).subscribe((next) => {
       this.alertify.message('updating record');
       this.details = 0;
      })
   }





  showDetails() { if (this.details === 1) { return true; } }

}
