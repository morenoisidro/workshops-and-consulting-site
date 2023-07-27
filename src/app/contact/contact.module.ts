import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact.component';
import { Web3FormsService } from './services/web3forms.service';
import { ContactService } from './services/contact.service';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    ContactRoutingModule,
  ],
  providers: [
    Web3FormsService,
    ContactService
  ]
})
export class ContactModule { }
