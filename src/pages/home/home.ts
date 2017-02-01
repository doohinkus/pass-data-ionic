import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  launchSecondPage (){

    let modal = this.modalCtrl.create(SecondPage);
    modal.onDidDismiss((data)=> {
      console.log(data);
    });
    modal.present();
  }

}
