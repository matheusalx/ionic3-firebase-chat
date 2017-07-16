import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';

import { AuthService } from './../../providers/auth.service';
import { HomePage } from './../home/home';
import { Signup } from './../signup/signup';


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  signinForm: FormGroup;

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams

  ) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  onSubmit(): void {

   let loading: Loading = this.showLoading();

    this.authService.signinWithEmail(this.signinForm.value)
      .then((isLogged: boolean) =>{
        
        if(isLogged){
          this.navCtrl.setRoot(HomePage);
          loading.dismiss();
        }

      
    }).catch((error: any) =>{
        console.log(error);
        loading.dismiss();
        this.showAlert(error);
    });
  }

  onSignup(): void {
    this.navCtrl.push(Signup);
  }

   private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });

    loading.present();

    return loading;
  }

  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }

}
