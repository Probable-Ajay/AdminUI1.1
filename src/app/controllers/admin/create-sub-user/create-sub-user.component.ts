import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Functionality {
  funcId: string;
  name: string;
  // selected: false;
  readAccess: false;
  writeAccess: false;
  reportView: string;
  authorizedONDs: string;
}
const ACCESS_DATA: Functionality[] = [
  {
    funcId: "SP",
    name: "Shop Price",
    // selected: false,
    readAccess: false,
    writeAccess: false,
    reportView: "NA",
    authorizedONDs: "BOM-CCU"
    // fullAccess: false
  },
  {
    funcId: "PT",
    name: "Price Trend",
    // selected: false,
    readAccess: false,
    writeAccess: false,
    reportView: "NA",
    authorizedONDs: "DEL-BLR"
    // fullAccess: false
  },
  {
    funcId: "SS",
    name: "Shop Status",
    // selected: false,
    readAccess: false,
    writeAccess: false,
    reportView: "Own View",
    authorizedONDs: "BLR-BOM"
    // fullAccess: false
  }
]

export interface Users {
  firstName: string;
  lastName: string;
  loginName: string;
  Status: string;
  creationDate: string;
  lastLogin: string;

}
const ELEMENT_DATA: Users[] = [
  { firstName: 'Ajay', lastName: 'Verma', loginName: 'ajay.verma@gmail.com', Status: 'Active', creationDate: '10-19-2019', lastLogin: '10-19-2019' },
  { firstName: 'Anuj', lastName: 'Verma', loginName: 'anuj.verma@gmail.com', Status: 'Active', creationDate: '10-20-2019', lastLogin: '10-19-2019' },
  { firstName: 'Sandhya', lastName: 'Verma', loginName: 'sandhya.verma@gmail.com', Status: 'Active', creationDate: '10-21-2019', lastLogin: '10-19-2019' },
  { firstName: 'Sanjeev', lastName: 'Verma', loginName: 'sanjeev.verma@gmail.com', Status: 'Active', creationDate: '10-23-2019', lastLogin: '10-19-2019' }

];

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
  // public functionalities: any[] = [
  //   {
  //     funcId: "SP",
  //     name: "Shop Price",
  //     selected: false,
  //     readAccess: false,
  //     writeAccess: false,
  //     reportView: "NA",
  //     authorizedONDs: "BOM-CCU"
  //     // fullAccess: false
  //   },
  //   {
  //     funcId: "PT",
  //     name: "Price Trend",
  //     selected: false,
  //     readAccess: false,
  //     writeAccess: false,
  //     reportView: "NA",
  //     authorizedONDs: "DEL-BLR"
  //     // fullAccess: false
  //   },
  //   {
  //     funcId: "SS",
  //     name: "Shop Status",
  //     selected: false,
  //     readAccess: false,
  //     writeAccess: false,
  //     reportView: "Own View",
  //     authorizedONDs: "BLR-BOM"
  //     // fullAccess: false
  //   }
  // ];



  displayedColumns: string[] = ['name', 'readAccess', 'writeAccess', 'reportView', 'authorizedONDs'];
  dataSource = new MatTableDataSource<Functionality>(ACCESS_DATA);

  constructor() { }

  ngOnInit() {
  }

}
