import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { userParam } from '../../models/user';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  
  userObject : userParam = new userParam();

  constructor(private LoginService: LoginService) { }

  ngOnInit() {
  }

  NewUserRegisteration(){

    if(!this.userObject.companyListing || !this.userObject.email 
          || !this.userObject.name || !this.userObject.contactNumber) {
                  alert('Please enter proper details...');
      }
    else{
      this.LoginService.newRegistration( this.userObject ).subscribe(
        res => { 
            alert('Succesfully Registered the Request..');
        });
    }
  }
}
