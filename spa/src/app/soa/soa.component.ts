import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: "app-soa",
  templateUrl: "./soa.component.html",
  styleUrls: ["./soa.component.css"],
})
export class SoaComponent implements OnInit {
  constructor(private router: Router, private alertify: AlertifyService) {}

  ngOnInit(): void {}
  linkToCSD() { window.location.href = "http://77.173.53.32:8046";}

  showPresentatie(id: number) { if (id === 1) { window.open("https://docs.google.com/presentation/d/1YOepKNN-2SqzUhFmkZjrpH10m_P_vIdO5ksp9o09xHk/edit?usp=sharing"); }}
  showDemo(id: number) {
    this.alertify.confirm("Your login credentials are: UN: marcel PWD: password", () => {if (id === 1) { window.open("http://77.173.53.32:8086"); }})
 }

}
