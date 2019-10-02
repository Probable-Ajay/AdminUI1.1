import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-dashboard-routes',
  templateUrl: './dashboard-routes.component.html',
  styleUrls: ['./dashboard-routes.component.css']
})
export class DashboardRoutesComponent implements OnInit {
  options: FormGroup;
 
 
  constructor(private router: Router, fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
  }
  ngOnInit() {
  }

  logOut(): void {
    this.router.navigate(['']);
    localStorage.removeItem('usermanagementToken');
  }
 
}
