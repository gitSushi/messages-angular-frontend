import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateMessageComponent } from './messaging/create-message/create-message.component';
import { InboxComponent } from './messaging/inbox/inbox.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "create-message", component: CreateMessageComponent },
  { path: "messages", component: InboxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
