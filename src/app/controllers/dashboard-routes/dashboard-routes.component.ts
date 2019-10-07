import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dashboard-routes',
  templateUrl: './dashboard-routes.component.html',
  styleUrls: ['./dashboard-routes.component.css']
})
export class DashboardRoutesComponent implements OnInit {
  options: FormGroup;
  showIconsOnly: boolean = true;

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

  toggleRightNav(): void {
    if (this.showIconsOnly) {
      this.showIconsOnly = false;
    } else {
      this.showIconsOnly = true;
    }
    document.getElementById('rtBttn').click();
    setTimeout(function () {
      document.getElementById('rtBttn').click();
    }, 1);

  }

}
