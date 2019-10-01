import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-mocking-ground',
  templateUrl: './mocking-ground.component.html',
  styleUrls: ['./mocking-ground.component.css']
})
export class MockingGroundComponent implements OnInit {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
  
  ngOnInit() {
  }

}
