import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.component.html',
  styleUrls: ['./waitlist.component.css']
})
export class WaitlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  linkToCSD() { window.location.href = "http://77.173.53.32:8046"; }

}