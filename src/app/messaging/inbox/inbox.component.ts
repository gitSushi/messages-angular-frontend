import { BehaviorSubject } from 'rxjs';
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

  myEventSubscription!: BehaviorSubject<Message[]>

  constructor(private messageService: MessageService) {
    this.myEventSubscription = this.messageService.subject;
  }

  ngOnDestroy(): void {
    this.myEventSubscription
      .unsubscribe();
  }

  ngOnInit(): void {
    this.myEventSubscription
      .subscribe(msgs => this.msgs = msgs)

    this.messageService.reload()

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
    this.messages.filter(msg => msg.read === input.checked);

    console.log(event);
  }

  showDetail(id: number) {
    console.log(this.messageService.getById(id));
  }

}
