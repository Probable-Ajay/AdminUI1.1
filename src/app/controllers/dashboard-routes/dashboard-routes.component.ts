import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-routes',
  templateUrl: './dashboard-routes.component.html',
  styleUrls: ['./dashboard-routes.component.css']
})
export class DashboardRoutesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logOut(): void {
    this.router.navigate(['']);
    localStorage.removeItem('usermanagementToken');
  }
}
