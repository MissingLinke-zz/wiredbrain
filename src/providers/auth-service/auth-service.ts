import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://glophish.3ilo.com/api/v1/';

@Injectable()
export class AuthService {

  constructor(public http: Http) {}

  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var paramData = 'email=' + credentials.email + '&password=' + credentials.passwrd1 + 'firstName=' + credentials.firstName + '&lastName=' + credentials.lastName + 'nickName=' + credentials.nickName + '&billingAddress1=' + credentials.billingAddress1 + 'billingAddress2=' + credentials.billingAddress2 + '&billingCity=' + credentials.billingCity + 'billingState=' + credentials.billingState + '&billingZip=' + credentials.billingZip + 'phoneNumber=' + credentials.phoneNumber  + '&applicationKey=4bd3f22b-f892-4b54-9325-d44c17df2075906a7cc5-6ece-4858-95da-a82f4e3859e0';
        //var data = '';
        this.http.post(apiUrl+'Account/RegisterRemote?'+paramData, JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var paramData = 'email=' + data.email + '&password=' + data.passWrd1 + 'firstName=' + data.firstName + '&lastName=' + data.lastName + 'nickName=' + 
        data.nickName + '&billingAddress1=' + data.billingAddress1 + 'billingAddress2=' + data.billingAddress2 + '&billingCity=' + data.billingCity + 'billingState=' + 
        data.billingState + '&billingZip=' + data.billingZip + 'phoneNumber=' + data.phoneNumber  + 
        '&applicationKey=4bd3f22b-f892-4b54-9325-d44c17df2075906a7cc5-6ece-4858-95da-a82f4e3859e0';
        //var data = '';
        console.log(apiUrl+'Account/RegisterRemote?'+paramData);
        this.http.post(apiUrl+'Account/RegisterRemote?'+paramData, {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            console.log(err);
            reject(err);
          });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('X-Auth-Token', localStorage.getItem('token'));

        this.http.post(apiUrl+'logout', {}, {headers: headers})
          .subscribe(res => {
            localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  }

}
