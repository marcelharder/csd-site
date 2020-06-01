import { OnInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { User } from '../_models/User';
import { NgForm } from '@angular/forms';
import { Photo } from '../_models/Photo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  photo: Photo =
  {
    id: 0,
    url: '',
    description: '',
    dateAdded: new Date(),
    isMain: false
  };
  @ViewChild('editForm') editForm: NgForm;


  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private alertify: AlertifyService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => { this.user = data.user; });
  }

  updateUser() {
    this.userService.saveUser(+this.authService.decodedToken.nameid, this.user ).subscribe(next => {
      this.alertify.success('Profile updated successfully');
      this.editForm.reset(this.user);
    }, error => {this.alertify.error(error); });
  }

  changeMainPhoto(photoUrl) { this.user.photoUrl = photoUrl; }
}

