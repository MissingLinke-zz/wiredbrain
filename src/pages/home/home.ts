import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  menuData = [];
  regPage: any;
  logPage: any
  loggedIn: any;

  checkOut: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.regPage = 'RegisterPage';
  }
  ngOnInit() {
    
    this.logPage = 'LoginPage';
    this.checkOut = 'CheckoutPage';
  }

  signOff(){    
    this.loggedIn = '';
  }
  
}
