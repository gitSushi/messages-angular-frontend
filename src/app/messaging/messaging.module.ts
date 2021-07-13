import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NotifComponent } from './notif/notif.component';
import { CreateMessageComponent } from './create-message/create-message.component';
import { InboxComponent } from './inbox/inbox.component';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    NotifComponent,
    CreateMessageComponent,
    InboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule
  ],
  exports: [
    InboxComponent,
    CreateMessageComponent
  ]
})
export class MessagingModule { }
