import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { HttpClient, HttpEventType } from "@angular/common/http";

@Component({
  selector: "app-mocking-ground",
  templateUrl: "./mocking-ground.component.html",
  styleUrls: ["./mocking-ground.component.css"]
})
export class MockingGroundComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: "",
      phones: this.fb.array([])
    });
  }

  get phoneForms() {
    return this.myForm.get("phones") as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    });

    this.phoneForms.push(phone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }

  onsubmit() {
    console.log(this.myForm.value);
  }
}
