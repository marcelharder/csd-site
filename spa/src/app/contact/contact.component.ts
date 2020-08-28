import { Component, OnInit, ViewChild } from '@angular/core';
import { DropItem } from '../_models/DropItem';
import { GeneralService } from '../_services/general.service';
import { AlertifyService } from '../_services/alertify.service';
import { NgForm } from '@angular/forms';
import { ContactMessage } from '../_models/contactMessage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  subjectList: Array<DropItem> = [];
  f: ContactMessage = { workemail: '', subject: 'Support', message: '' };
  csdUrl = environment.csdUrl;

  constructor(private gen: GeneralService, private alertify: AlertifyService) { }

  ngOnInit(): void {

    this.subjectList.push({ value: 1, description: 'Support' });
    this.subjectList.push({ value: 2, description: 'User registration' });
    this.subjectList.push({ value: 3, description: 'Billing' });
    this.subjectList.push({ value: 4, description: 'Other queries' });

  }
  linkToCSD() { window.location.href = this.csdUrl; }

  sendMessage() {
    if (this.canIproceed()) {
      this.gen.sendMessage(this.f).subscribe(next => {
        this.alertify.success('Message sent');
        this.editForm.reset(this.f);
      }, error => { this.alertify.error(error); });
    }

  }


  canIproceed(): boolean {
    let help = false;
    if (this.f.workemail !== '' && this.isEmailValid(this.f.workemail)) {
      if (this.f.message !== '') { help = true; } else { this.alertify.error('Please enter your message') }
    } else {this.alertify.error('Your email is required ...')}
    return help;
  }

  isEmailValid(test: string):boolean {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let help = false;
    if(test.match(mailformat)){help = true;}
    return help;
  }



}
