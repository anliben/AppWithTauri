import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imgSource = 'https://via.placeholder.com/150';
  width: string;
  heigth: string;

  constructor(
  ) {}

  createImage(){
    this.imgSource = `https://via.placeholder.com/${this.width}x${this.heigth}`;
  }
}
