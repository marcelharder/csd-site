import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cassette-explain',
  templateUrl: './cassette-explain.component.html',
  styleUrls: ['./cassette-explain.component.css']
})
export class CassetteExplainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 close(){this.router.navigate(['/listOfRegistries'])}
}
