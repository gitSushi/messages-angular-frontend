import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  items!: MenuItem[];

  constructor() {
    this.items = [
      { label: 'File' },
      { label: 'Open' },
      { label: 'Project' },
      { label: 'Other' },
      { label: 'Quit' }
    ];
  }

}
