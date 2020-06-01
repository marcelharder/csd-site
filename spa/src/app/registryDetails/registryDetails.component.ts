import { Component, OnInit, Input } from '@angular/core';
import { DropService } from '../_services/drop.service';
import { AlertifyService } from '../_services/alertify.service';
import { DropItem } from '../_models/DropItem';
import { RegistryDetails } from '../_models/registrydetails';
import * as _ from 'underscore';
import { environment } from 'src/environments/environment';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { HemodynamicsService } from '../_services/hemodynamics.service';
import { TabDirective } from 'ngx-bootstrap/tabs/tab.directive';

@Component({
  selector: 'app-registryDetails',
  templateUrl: './registryDetails.component.html',
  styleUrls: ['./registryDetails.component.css'],
})
export class RegistryDetailsComponent implements OnInit {
  @Input() reg: RegistryDetails;

  baseUrl = environment.apiUrl;
  details = 0;
  upload = 0;
  hemo = 0;
  graphs = 0;

  optionsIndication: Array<DropItem> = [];
  optionsSupport: Array<DropItem> = [];
  optionsHours: Array<DropItem> = [];
  optionsMinutes: Array<DropItem> = [];
  optionsVVSize: Array<DropItem> = [];
  optionsCS: Array<DropItem> = [];
  optionsAge: Array<DropItem> = [];
  optionsGender: Array<DropItem> = [];
  optionsHeight: Array<DropItem> = [];
  optionsWeight: Array<DropItem> = [];
  optionsYN: Array<DropItem> = [];

  optionsSizes1: Array<DropItem> = [];
  optionsSizes2: Array<DropItem> = [];
  optionsSizes3: Array<DropItem> = [];

  optionsLength1: Array<DropItem> = [];
  optionsLength2: Array<DropItem> = [];
  optionsLength3: Array<DropItem> = [];
  optionsReasonDeath: Array<DropItem> = [];
  optionsRepair: Array<DropItem> = [];
  optionsDischargeLocation: Array<DropItem> = [];
  optionsReasonsDiscontinuing: Array<DropItem> = [];

  constructor(
    private drops: DropService,
    private router: Router,
    private hemoService: HemodynamicsService,
    private alertify: AlertifyService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadDrops();
    this.details = 1;
  }

  loadDrops() {
    let d = JSON.parse(localStorage.getItem('optionsIndication'));
    if (d == null || d.length === 0) {
      this.drops.getOptions(61).subscribe((response) => {
        this.optionsIndication = response;
        localStorage.setItem('optionsIndication', JSON.stringify(response));
      });
    } else {
      this.optionsIndication = JSON.parse(
        localStorage.getItem('optionsIndication')
      );
    }

    d = JSON.parse(localStorage.getItem('optionsSupport'));
    if (d == null || d.length === 0) {
      this.drops.getOptions(62).subscribe((response) => {
        this.optionsSupport = response;
        localStorage.setItem('optionsSupport', JSON.stringify(response));
      });
    } else {
      this.optionsSupport = JSON.parse(localStorage.getItem('optionsSupport'));
    }
    d = JSON.parse(localStorage.getItem('optionsCS'));
    if (d == null || d.length === 0) {
      this.drops.getOptions(63).subscribe((response) => {
        this.optionsCS = response;
        localStorage.setItem('optionsCS', JSON.stringify(response));
      });
    } else {
      this.optionsCS = JSON.parse(localStorage.getItem('optionsCS'));
    }
    d = JSON.parse(localStorage.getItem('optionsVV'));
    if (d == null || d.length === 0) {
      this.drops.getOptions(71).subscribe((response) => {
        this.optionsVVSize = response;
        localStorage.setItem('optionsVV', JSON.stringify(response));
      });
    } else {
      this.optionsVVSize = JSON.parse(localStorage.getItem('optionsVV'));
    }
    d = JSON.parse(localStorage.getItem('optionsAge'));
    if (d == null || d.length === 0) {
      this.drops.getOptions(78).subscribe((response) => {
        this.optionsAge = response;
        localStorage.setItem('optionsAge', JSON.stringify(response));
      });
    } else {
      this.optionsAge = JSON.parse(localStorage.getItem('optionsAge'));
    }
    d = JSON.parse(localStorage.getItem('optionsGender'));
    if (d == null || d.length === 0) {
      this.drops.getOptions(64).subscribe((response) => {
        this.optionsGender = response;
        localStorage.setItem('optionsGender', JSON.stringify(response));
      });
    } else {
      this.optionsGender = JSON.parse(localStorage.getItem('optionsGender'));
    }
    d = JSON.parse(localStorage.getItem('optionsHeight'));
    if (d == null || d.length === 0) {
      this.drops.getOptions(79).subscribe((response) => {
        this.optionsHeight = response;
        localStorage.setItem('optionsHeight', JSON.stringify(response));
      });
    } else {
      this.optionsHeight = JSON.parse(localStorage.getItem('optionsHeight'));
    }
    d = JSON.parse(localStorage.getItem('optionsWeight'));
    if (d == null || d.length === 0) {
      this.drops.getOptions(80).subscribe((response) => {
        this.optionsWeight = response;
        localStorage.setItem('optionsWeight', JSON.stringify(response));
      });
    } else {
      this.optionsWeight = JSON.parse(localStorage.getItem('optionsWeight'));
    }
    d = JSON.parse(localStorage.getItem('optionsYN'));
    if (d == null || d.length === 0) {
      this.drops.getOptions(68).subscribe((response) => {
        this.optionsYN = response;
        localStorage.setItem('optionsYN', JSON.stringify(response));
      });
    } else {
      this.optionsYN = JSON.parse(localStorage.getItem('optionsYN'));
    }
    d = JSON.parse(localStorage.getItem('optionsReasonDeath'));
    if (d == null || d.length === 0) {
      this.drops.getOptions(65).subscribe((response) => {
        this.optionsReasonDeath = response;
        localStorage.setItem('optionsReasonDeath', JSON.stringify(response));
      });
    } else {
      this.optionsReasonDeath = JSON.parse(
        localStorage.getItem('optionsReasonDeath')
      );
    }
    d = JSON.parse(localStorage.getItem('optionsRepair'));
    if (d == null || d.length === 0) {
      this.drops.getOptions(69).subscribe((response) => {
        this.optionsRepair = response;
        localStorage.setItem('optionsRepair', JSON.stringify(response));
      });
    } else {
      this.optionsRepair = JSON.parse(localStorage.getItem('optionsRepair'));
    }
    d = JSON.parse(localStorage.getItem('optionsDischargeLocation'));
    if (d == null || d.length === 0) {
      this.drops.getOptions(75).subscribe((response) => {
        this.optionsDischargeLocation = response;
        localStorage.setItem(
          'optionsDischargeLocation',
          JSON.stringify(response)
        );
      });
    } else {
      this.optionsDischargeLocation = JSON.parse(
        localStorage.getItem('optionsDischargeLocation')
      );
    }
    d = JSON.parse(localStorage.getItem('optionsReasonsDiscontinuing'));
    if (d == null || d.length === 0) {
      this.drops.getOptions(66).subscribe((response) => {
        this.optionsReasonsDiscontinuing = response;
        localStorage.setItem(
          'optionsReasonsDiscontinuing',
          JSON.stringify(response)
        );
      });
    } else {
      this.optionsReasonsDiscontinuing = JSON.parse(
        localStorage.getItem('optionsReasonsDiscontinuing')
      );
    }
  }

  canSite1Changed(value: number) {
    // get the description from optionsCS
    const description = this.optionsCS[value].description;
    if (_.contains(['LFA', 'RFA', 'RCCA', 'LCCA', 'Aorta'], description, 0)) {
      // get the arterial sizes now
      this.drops.getOptions(72).subscribe((next) => {
        this.optionsSizes1 = next;
      });
      this.drops.getOptions(73).subscribe((next) => {
        this.optionsLength1 = next;
      });
    } else {
      // get the venous sizes now
      this.drops.getOptions(70).subscribe((next) => {
        this.optionsSizes1 = next;
      });
      this.drops.getOptions(74).subscribe((next) => {
        this.optionsLength1 = next;
      });
    }
  }
  canSite2Changed(value: number) {
    const description = this.optionsCS[value].description;
    if (_.contains(['LFA', 'RFA', 'RCCA', 'LCCA', 'Aorta'], description, 0)) {
      // get the arterial sizes now
      this.drops.getOptions(72).subscribe((next) => {
        this.optionsSizes2 = next;
      });
      this.drops.getOptions(73).subscribe((next) => {
        this.optionsLength2 = next;
      });
    } else {
      // get the venous sizes now
      this.drops.getOptions(70).subscribe((next) => {
        this.optionsSizes2 = next;
      });
      this.drops.getOptions(74).subscribe((next) => {
        this.optionsLength2 = next;
      });
    }
  }
  canSite3Changed(value: number) {
    const description = this.optionsCS[value].description;
    if (_.contains(['LFA', 'RFA', 'RCCA', 'LCCA', 'Aorta'], description, 0)) {
      // get the arterial sizes now
      this.drops.getOptions(72).subscribe((next) => {
        this.optionsSizes3 = next;
      });
      this.drops.getOptions(73).subscribe((next) => {
        this.optionsLength3 = next;
      });
    } else {
      // get the venous sizes now
      this.drops.getOptions(70).subscribe((next) => {
        this.optionsSizes3 = next;
      });
      this.drops.getOptions(74).subscribe((next) => {
        this.optionsLength3 = next;
      });
    }
  }
  onSelect(data: TabDirective): void {
    if (data.heading === 'Hemodynamics') {
      this.alertify.message('Looking for hemodynamics file');
      this.hemoService
        .findHemoFile(+this.authService.decodedToken.nameid, this.reg.id)
        .subscribe(
          (next) => {
            if (next === 'found') {
              console.log('hallo');
              this.hemo = 1;
            } else {
              this.hemo = 0;
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  explainUpload() {
    this.router.navigate(['/hemodynamicsExplain']);
  }

  removeHemodynamicsFile() {
    this.alertify.confirm('Are you sure ?', () => {
      this.hemoService.deleteHemo(2).subscribe((next) => {
        this.alertify.message(next);
      });
      this.hemo = 0;
      this.details = 1;
    });
  }
  showHemodynamicsFile() {
    this.graphs = 1;
  }
  showUploadStuff() {
    this.details = 0;
    this.upload = 1;
  }

  closingHemodynamics(e: any) {
    // coming out of the hemodynamics file/graphs
    this.graphs = 0;
  }
  uploadDone(e: any) {
    if (e === 'klaar') {
    }
    this.details = 1;
    this.upload = 0;
  }

  showUploader() {
    if (this.upload === 1) {
      return true;
    }
  }
  showDetails() {
    if (this.details === 1) {
      return true;
    }
  }

  showHemo() {
    if (this.hemo === 1) {
      return true;
    }
  }
  showGraphs() {
    if (this.graphs === 1) {
      return true;
    }
  }
}
