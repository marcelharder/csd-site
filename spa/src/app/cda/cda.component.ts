import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cda',
  templateUrl: './cda.component.html',
  styleUrls: ['./cda.component.css']
})
export class CdaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  linkToCSD() { window.location.href = 'http://77.173.53.32:8046'; }

}
