import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../environments/environment';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import * as _ from 'underscore';
import { Photo } from '../_models/Photo';


@Component({
  selector: 'app-photo-editor',
  templateUrl: './photoEditor.component.html',
  styleUrls: ['./photoEditor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];
  @Output() getMemberPhotoChange: EventEmitter<string> = new EventEmitter();
  uploader: FileUploader;
  currentMainPhoto: Photo;

  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;

  constructor(private authService: AuthService,
              private userService: UserService,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.initializeUploader();
  }

public fileOverBase(e: any): void {
this.hasBaseDropZoneOver = e;
}

initializeUploader() {
this.uploader = new FileUploader({
url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos/',
authToken: 'Bearer ' + localStorage.getItem('token'),
isHTML5 : true,
allowedFileType: ['image'],
removeAfterUpload: true,
autoUpload: false,
maxFileSize: 10 * 1024 * 1024
});
this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };
this.uploader.onSuccessItem = (item, response, status, headers) => {
  if (response) {
    const res: Photo = JSON.parse(response);
    const photo = {
      id: res.id,
      url: res.url,
      dateAdded: res.dateAdded,
      description: res.description,
      isMain: res.isMain
     };
    this.photos.push(photo);
    if (photo.isMain) {
     /*  this.authService.changeMemberPhoto(photo.url);
      this.authService.currentUser.photoUrl = photo.url;
      localStorage.setItem('user', JSON.stringify(this.authService.currentUser) ); */
     }
  }
};
}

setMainPhoto(photo: Photo) {
  this.userService.setMainPhoto(+this.authService.decodedToken.nameid, photo.id).subscribe(() => {
   // this.currentMainPhoto = _.findWhere(this.photos, {isMain: true});
   this.currentMainPhoto = this.photos.filter(p => p.isMain === true)[0];
   this.currentMainPhoto.isMain = false;
   photo.isMain = true;
   this.getMemberPhotoChange.emit(photo.url);

  /*  this.authService.changeMemberPhoto(photo.url);
   this.authService.currentUser.photoUrl = photo.url;
   localStorage.setItem('user', JSON.stringify(this.authService.currentUser) ); */



  }, error => {this.alertify.error(error); });

}

deletePhoto(id: number) {
  this.alertify.confirm('Are you sure you want to delete this photo', () => {
    this.userService.deletePhoto(+this.authService.decodedToken.nameid, id).subscribe(() => {
      this.photos.splice(_.findIndex(this.photos, {id}, 1));
      this.alertify.success('Photo has been deleted');
    }, error => {this.alertify.error(error + 'Failed to delete photo'); });
  });
}



}
