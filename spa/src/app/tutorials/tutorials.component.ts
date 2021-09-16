import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Url } from 'url';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {
  
  showPage = '';
  videoUrl1 = '';
  videoUrl2 = '';
  videoUrl3 = '';
  videoUrl4 = '';

  safeUrl1:SafeResourceUrl;
  safeUrl2:SafeResourceUrl;
  safeUrl3:SafeResourceUrl;
  safeUrl4:SafeResourceUrl;

  constructor(private ac: ActivatedRoute, private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    // get the parameter
   this.showPage = this.ac.snapshot.params.id;

   if(this.displayPage1){
     this.videoUrl1 = "https://res.cloudinary.com/marcelcloud/video/upload/v1612886059/tutorial%20videos/tutorial_1.mp4";
     this.videoUrl2 = "https://res.cloudinary.com/marcelcloud/video/upload/v1612886059/tutorial%20videos/tutorial_2.mp4";
     this.videoUrl3 = "https://res.cloudinary.com/marcelcloud/video/upload/v1612886082/tutorial%20videos/ReportsTutorial.mp4";
     this.videoUrl4 = "https://res.cloudinary.com/marcelcloud/video/upload/v1612885996/tutorial%20videos/StatisticsTutorial.mp4";
     
     this.safeUrl1 = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl1);
     this.safeUrl2 = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl2);
     this.safeUrl3 = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl3);
     this.safeUrl4 = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl4);
   }


  
  }

  displayPage1(){if(this.showPage === '1'){return true;} else {return false;}}
  displayPage2(){if(this.showPage === '2'){return true;} else {return false;}}
  displayPage3(){if(this.showPage === '3'){return true;} else {return false;}}
  displayPage4(){if(this.showPage === '4'){return true;} else {return false;}}


}
