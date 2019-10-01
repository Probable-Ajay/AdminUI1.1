import { Injectable } from '@angular/core';
import { AppSettings } from '../configurations/AppSettings';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { userParam } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  //Mock for references... 
  apiHealthCheck() {
    const apiUrl = AppSettings.API_ENDPOINT;
    return this.httpClient.get(apiUrl);
}

  //API Calls.. 
  newRegistration(params: any) {
   
    const apiUrl = AppSettings.API_ENDPOINT + 'users/register';
    const  headers = new  HttpHeaders().set('Content-Type', 'application/json');
   
    return this.httpClient.post(apiUrl, params, {headers});
}

  authenticateUser(params: userParam){
    
    const apiUrl = AppSettings.API_ENDPOINT + 'users/authenticate';
    const  headers = new  HttpHeaders().set('Content-Type', 'application/json');
    
    return this.httpClient.post(apiUrl, params, {headers});
  }

}
