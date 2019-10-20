import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'

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
  { firstName: 'Anuj', lastName: 'Verma', loginName: 'anuj.verma@gmail.com', Status: 'Active', creationDate: '10-19-2019', lastLogin: '10-19-2019' },
  { firstName: 'Sandhya', lastName: 'Verma', loginName: 'sandhya.verma@gmail.com', Status: 'Active', creationDate: '10-19-2019', lastLogin: '10-19-2019' },
  { firstName: 'Sanjeev', lastName: 'Verma', loginName: 'sanjeev.verma@gmail.com', Status: 'Active', creationDate: '10-19-2019', lastLogin: '10-19-2019' },
  { firstName: 'Deepak', lastName: 'Verma', loginName: 'deepak.verma@gmail.com', Status: 'Active', creationDate: '10-19-2019', lastLogin: '10-19-2019' },
  { firstName: 'Vivek', lastName: 'Verma', loginName: 'vivek.verma@gmail.com', Status: 'Active', creationDate: '10-19-2019', lastLogin: '10-19-2019' },
  { firstName: 'Vinay', lastName: 'Verma', loginName: 'vinay.verma@gmail.com', Status: 'Active', creationDate: '10-19-2019', lastLogin: '10-19-2019' },
  { firstName: 'Ashish', lastName: 'Verma', loginName: 'ashish.verma@gmail.com', Status: 'Active', creationDate: '10-19-2019', lastLogin: '10-19-2019' },
  { firstName: 'Ajay', lastName: 'Verma', loginName: 'ajay.verma@gmail.com', Status: 'Active', creationDate: '10-19-2019', lastLogin: '10-19-2019' },
  { firstName: 'Ajay', lastName: 'Verma', loginName: 'ajay.verma@gmail.com', Status: 'Active', creationDate: '10-19-2019', lastLogin: '10-19-2019' },
  { firstName: 'Ajay', lastName: 'Verma', loginName: 'ajay.verma@gmail.com', Status: 'Active', creationDate: '10-19-2019', lastLogin: '10-19-2019' },
  { firstName: 'Ajay', lastName: 'Verma', loginName: 'ajay.verma@gmail.com', Status: 'Active', creationDate: '10-19-2019', lastLogin: '10-19-2019' }

];

@Component({
  selector: 'app-sub-user',
  templateUrl: './sub-user.component.html',
  styleUrls: ['./sub-user.component.css']
})
export class SubUserComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'loginName', 'Status', 'creationDate', 'lastLogin'];
  dataSource = new MatTableDataSource<Users>(ELEMENT_DATA);
  constructor() { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
