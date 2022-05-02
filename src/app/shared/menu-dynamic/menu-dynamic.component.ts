import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu-dynamic',
  templateUrl: './menu-dynamic.component.html',
  styleUrls: ['./menu-dynamic.component.scss'],
})
export class MenuDynamicComponent implements OnInit {
  menus: Array<PoMenuItem> = [
    {
      label: 'Home', link: '/', shortLabel: 'Home'
    },
    {
      label: 'Generate Images', link: '/generate-imagens', shortLabel: 'G-imagens'
    },
    {
      label: 'Generate Lorem', link: '/generate-lorem', shortLabel: 'G-Lorem'
    },
  ];

  constructor() { }

  ngOnInit() {}

}
