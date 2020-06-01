import { FormBuilder, FormGroup } from "@angular/forms";

import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { HemodynamicsService } from "../_services/hemodynamics.service";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../_services/alertify.service";

@Component({
  selector: "app-hemo-uploader",
  templateUrl: "./hemo-uploader.component.html",
  styleUrls: ["./hemo-uploader.component.css"],
})
export class HemoUploaderComponent implements OnInit {
  @Input() id: number;
  @Output() out: EventEmitter<string> = new EventEmitter();
  uploadForm: FormGroup;

  selectedFile: File = null;

  constructor(
    private alertify: AlertifyService,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private hemoService: HemodynamicsService
  ) {}

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: [],
    });
  }

  onFileSelect(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      this.uploadForm.get("profile").setValue(file);
    }
  }

  cancel() {
    this.out.emit("klaar");
  }

  onSubmit() {
    const fd = new FormData();
    fd.append("file", this.uploadForm.get("profile").value);

    this.hemoService
      .uploadHemoFile(+this.auth.decodedToken.nameid, this.id, fd)
      .subscribe((response) => {
        this.alertify.message(response);
        this.out.emit("klaar");
      });
  }
}
