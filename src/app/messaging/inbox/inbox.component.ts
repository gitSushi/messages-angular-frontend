import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Message } from './../models/message';
import { MessageService } from './../service/message.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit, OnDestroy {

  @Input() count!: number;
  @Input() messages!: Message[];

  msgs!: Message[];
  cols!: any[];

  constructor(private messageService: MessageService) { }

  ngOnDestroy(): void {
    this.messageService
      .subject
      .unsubscribe();
  }

  ngOnInit(): void {
    // this.messages.splice(0, this.count);

    // this.msgs = this.messageService.getMsg();
    // console.log(this.msgs);

    // this.messageService.getMsg().then(m => this.msgs = m);

    /**
     * promise with Loic
     */
    // this.messageService
    //   .getAllMessages()
    //   .then(m => this.msgs = m)
    //   .catch(err => console.log(err)
    //   );

    /**
     * Observable with Loic
     */
    // this.messageService
    //   .getObservable()
    //   .subscribe(msgs => this.msgs = msgs)

    this.messageService
      .subject
      .subscribe(msgs => this.msgs = msgs)

    this.messageService.reload()

    /**
     * LOOK FURTHER INTO Date()
     */
    // this.msgs.forEach(m => m.sendAt && console.log(m.sendAt));


    this.cols = [
      { field: 'from', header: 'From' },
      { field: 'to', header: 'To' },
      { field: 'subject', header: 'Subject' },
      { field: 'body', header: 'Body' },
      { field: 'sendAt', header: 'Send at' }
    ];
  }

  filter(event: Event) {
    // casting
    let input = event.target as HTMLInputElement;

    // IDEA FOR THE GOVERNMENT
    // setTimeout(() => { input.checked = false; }, 500)

    this.messages.filter(msg => msg.read === input.checked);

    console.log(event);
  }

  showDetail(id: number) {
    console.log(this.messageService.getById(id));
  }

}
