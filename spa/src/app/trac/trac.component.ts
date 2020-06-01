import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trac',
  templateUrl: './trac.component.html',
  styleUrls: ['./trac.component.css']
})
export class TracComponent implements OnInit {

  page = 1;

  constructor() { }

  ngOnInit(): void {
  }

  ShowPage(no: number){
          if(no === 1){ if(this.page === 1){return true;}}
          if(no === 2){ if(this.page === 2){return true;}}
          if(no === 3){ if(this.page === 3){return true;}}
          if(no === 4){ if(this.page === 4){return true;}}
          if(no === 5){ if(this.page === 5){return true;}}
          return false;
  }

  displayPage(no: number){
    this.page = no;
  }
  linkToCSD() { window.location.href = "http://77.173.53.32:8046"; }

}
