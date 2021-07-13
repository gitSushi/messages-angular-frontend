import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenubarModule } from 'primeng/menubar';

import { MessagingModule } from './../messaging/messaging.module';

import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MessagingModule,
    TieredMenuModule,
    MenubarModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ContentComponent,
  ]
})
export class TemplateModule { }
