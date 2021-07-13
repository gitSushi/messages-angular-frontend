import { Component } from '@angular/core';

import { MessageService } from './../service/message.service';
import { Message } from './../models/message';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent {
  newMsg: Message = {
    id: -1,
    from: "",
    to: "",
    subject: "",
    body: "",
    read: false,
    sendAt: new Date().toDateString()
  };

  constructor(private msgService: MessageService) { }

  sendMsg() {
    this.msgService
      .createMessage(this.newMsg)

    this.newMsg = {
      id: -1,
      from: "",
      to: "",
      subject: "",
      body: "",
      read: false,
      sendAt: new Date().toDateString()
    };
  }
}
