import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  loading: any;
  regData = { 
    email:'',
    passWrd1:'',
    passWrd2:'',
    firstName: '',
    lastName: '',
    nickName: '',
    billingAddress1: '',
    billingAddress2: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    phoneNumber: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {}


  doSignup() {
    if (this.regData.passWrd1 != this.regData.passWrd2){
      // this.displayAlert('Password Problem!', 'Passwords do not match, please try again.');
      this.presentToast('Passwords do not match!');
      this.regData.passWrd1 = '';
      this.regData.passWrd2 = '';
    } else {
      this.showLoader();
      this.authService.register(this.regData).then((result) => {
        this.loading.dismiss();
        this.navCtrl.pop();
      }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
      });  
    }
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

    presentToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom',
        dismissOnPageChange: true
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }

}
