import { Component } from '@angular/core';

import { MessageService } from './../service/message.service';
import { Message } from './../models/message';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent {

  // newMsg: Message = {
  //   id: 8,
  //   from: "cherry",
  //   to: "apple",
  //   subject: "about veggies",
  //   body: "they're so DUMB !",
  //   read: false,
  //   sendAt: new Date()
  // };
  newMsg: Message = {
    id: -1,
    from: "",
    to: "",
    subject: "",
    body: "",
    read: false,
    sendAt: new Date().toDateString()
  };
  // newMsg!: Message;

  constructor(private msgService: MessageService) { }

  sendMsg() {
    this.msgService
      .createMessage(this.newMsg)


    // let temp = this.newMsg
    // this.msgService.getLastId().then(n => {
    //   temp.id = parseInt(`${n}`);
    //   this.msgService.create(temp);
    // })
    // let lastId = 2;
    // console.log();

    // this.newMsg.id = lastId;
    // this.msgService.create(this.newMsg);
    // console.log(this.newMsg);
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
