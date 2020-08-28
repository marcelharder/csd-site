import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  csdUrl = environment.csdUrl;
  constructor() { }

  ngOnInit() {
  }

  linkToCSD() { window.location.href = this.csdUrl; }

}
