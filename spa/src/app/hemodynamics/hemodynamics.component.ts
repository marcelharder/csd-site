import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GraphService } from "../_services/graph.service";
import { AuthService } from "../_services/auth.service";
import { from } from "rxjs";
import { pluck, toArray } from "rxjs/operators";
import { GraphItem } from "../_models/graphItem";

@Component({
  selector: "app-hemodynamics",
  templateUrl: "./hemodynamics.component.html",
  styleUrls: ["./hemodynamics.component.css"],
})
export class HemodynamicsComponent implements OnInit {
  @Input() registryId: number;
  @Output() out: EventEmitter<string> = new EventEmitter();
  title = "";
  chart = 1;
  //dataFromAPI: Array<GraphItem> = [];

  dataYas: Array<number> = [];  datapartYas: Array<number> = [];  datapintYas: Array<number> = [];  datatempYas: Array<number> = [];
  dataXas: Array<string> = [];  datapartXas: Array<string> = [];  datapintXas: Array<string> = [];  datatempXas: Array<string> = [];

  dataLabel = "";  datapartLabel = "";  datapintLabel = "";  datatempLabel = "";

  //array1: any;  array2: any;  array3: any;

  constructor(private graphService: GraphService, private auth: AuthService) {}

  ngOnInit() {
    this.graphService
      .getSvO2(+this.auth.decodedToken.nameid, this.registryId)
      .subscribe((response) => {
          this.dataYas = response;
          this.dataLabel = "SvO2";
          this.chart = 1;
          if (this.dataXas.length === 0) {for (let i = 0; i < this.dataYas.length; i++) { this.dataXas.push(i.toString()); }}

        },
        (error) => {
          console.log(error);
        }
      );
  }

  showChart() {
    return this.chart;
  }

  showSvO2() {
    this.graphService
      .getSvO2(+this.auth.decodedToken.nameid, this.registryId)
      .subscribe((response) => {
        this.dataYas = response;
        this.dataLabel = "SvO2";
        this.chart = 1;
        if (this.dataXas.length === 0) {for (let i = 0; i < this.dataYas.length; i++) { this.dataXas.push(i.toString()); }}
      });
  }
  showPart() {
    this.graphService
      .getPart(+this.auth.decodedToken.nameid, this.registryId)
      .subscribe((response) => {
        this.datapartYas = response;
        this.datapartLabel = "Part";
        this.chart = 2;
        if (this.datapartXas.length === 0) {
          for (let i = 0; i < this.datapartYas.length; i++) {
            this.datapartXas.push(i.toString());
          }
        }
      });
  }
  showPint() {
    this.graphService
      .getPint(+this.auth.decodedToken.nameid, this.registryId)
      .subscribe((response) => {
        this.datapintYas = response;
        this.datapintLabel = "PInt";
        this.chart = 3;
        if (this.datapintXas.length === 0) {
          for (let i = 0; i < this.datapintYas.length; i++) {
            this.datapintXas.push(i.toString());
          }
        }
      });
  }
  showTemp() {
    this.graphService
      .getTemp(+this.auth.decodedToken.nameid, this.registryId)
      .subscribe((response) => {
        this.datatempYas = response;
        this.datatempLabel = "Temp";
        this.chart = 4;
        if (this.datatempXas.length === 0) {
          for (let i = 0; i < this.datatempYas.length; i++) {
            this.datatempXas.push(i.toString());
          }
        }
      });
  }

  leave() {
    this.out.emit("klaar met de graphs");
  }
}
