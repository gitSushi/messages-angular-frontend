import { Component, OnInit } from '@angular/core';

import { MessageService } from './../../messaging/service/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private messageService: MessageService) { }



}
