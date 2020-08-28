import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-echo',
  templateUrl: './echo.component.html',
  styleUrls: ['./echo.component.css']
})
export class EchoComponent implements OnInit {
csdUrl = environment.csdUrl;
  constructor() { }

  ngOnInit(): void {  }

  linkToCSD() { window.location.href = this.csdUrl; }
}
