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
  ngOnInit() {
    this.dropdownList = [
      { id: 1, itemName: "India" },
      { id: 2, itemName: "Singapore" },
      { id: 3, itemName: "Australia" },
      { id: 4, itemName: "Canada" },
      { id: 5, itemName: "South Korea" },
      { id: 6, itemName: "Germany" },
      { id: 7, itemName: "France" },
      { id: 8, itemName: "Russia" },
      { id: 9, itemName: "Italy" },
      { id: 10, itemName: "Sweden" }
    ];
    this.selectedItems = [
      { id: 2, itemName: "Singapore" },
      { id: 3, itemName: "Australia" },
      { id: 4, itemName: "Canada" },
      { id: 5, itemName: "South Korea" }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
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
