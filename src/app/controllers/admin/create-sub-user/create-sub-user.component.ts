import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-sub-user',
  templateUrl: './create-sub-user.component.html',
  styleUrls: ['./create-sub-user.component.css']
})
export class CreateSubUserComponent implements OnInit {


  public userRoles: any[] = [
    "Super User",
    "Admin",
    "Analyst"
  ];
  public functionalities: any[] = [
    {
      funcId: "SP",
      name: "Shop Price",
      selected: false,
      readAccess: false,
      writeAccess: false,
      fullAccess: false
    },
    {
      funcId: "PT",
      name: "Price Trend",
      selected: false,
      readAccess: false,
      writeAccess: false,
      fullAccess: false
    },
    {
      funcId: "SS",
      name: "Shop Status",
      selected: false,
      readAccess: false,
      writeAccess: false,
      fullAccess: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
