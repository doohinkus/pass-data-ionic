import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/*
  Generated class for the Second page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-second',
  templateUrl: 'second.html'
})
export class SecondPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController) {}


  ionViewDidLoad() {
    console.log(this.navParams.get('title'))
  }

  closeModal (){
    let data = {
      title: "hello",
      body: "how ya doing?"
    };
    this.viewCtrl.dismiss(data);
  }

}
