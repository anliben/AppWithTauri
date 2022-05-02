import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-imagens',
  templateUrl: './generate-imagens.component.html',
  styleUrls: ['./generate-imagens.component.scss'],
})
export class GenerateImagensComponent implements OnInit {
  imgSource = 'https://via.placeholder.com/150';
  width: string;
  heigth: string;

  constructor() {}

  ngOnInit() {}

  createImage() {
    this.imgSource = `https://via.placeholder.com/${this.width}x${this.heigth}`;
  }
}
