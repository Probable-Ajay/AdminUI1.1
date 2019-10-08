import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { HttpClient, HttpEventType } from "@angular/common/http";

@Component({
  selector: "app-mocking-ground",
  templateUrl: "./mocking-ground.component.html",
  styleUrls: ["./mocking-ground.component.css"]
})
export class MockingGroundComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  radioOptions: string = "TEST1";
  ngOnInit() {}

  selectedFile = null;
  scheduledReportButton: boolean;
  constructor(private http: HttpClient) {}
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
  }
  onUpload() {
    const fd = new FormData();
    fd.append("image", this.selectedFile, this.selectedFile.name);
    this.http
      .post("http://10.190.5.18/uploadFile", fd, {
        reportProgress: true,
        observe: "events"
      })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log(
            "Upload Progress: " +
              Math.round((event.loaded / event.total) * 100) +
              "%"
          );
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      });
  }

  onChange() {
    this.scheduledReportButton = !this.scheduledReportButton;
  }
}
