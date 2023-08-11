import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navLink = [
    {
      id: 1,
      label: 'Men',
      isHover: false,
    },
    {
      id: 2,
      label: 'Women',
      isHover: false,
    },
    {
      id: 3,
      label: 'Accessories',
      isHover: false,
    },
  ];

  handleHover(label: string) {
    this.navLink.forEach((link) => {
      if (link.label === label) {
        link.isHover = true;
      } else {
        link.isHover = false;
      }
    });
  }
}
