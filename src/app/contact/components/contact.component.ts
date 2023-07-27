import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, take, tap } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnDestroy {

  contactForm: FormGroup;
  httpPostSubscription = new Subscription();

  public submitSucces = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      subject: [''],
      name: [''],
      email: [''],
      phone: [''],
      message: ['']
    });
  }

  
  public get subject() {
    return this.contactForm.get('subject');
  }

  
  public get email() {
    return this.contactForm.get('email');
  }
  
  
  onSubmit() {
    this.subject?.setValue(`Contact request from ${this.email?.value}`);

    this.httpPostSubscription = this.contactService.submitContactForm(this.contactForm.getRawValue()).pipe(
      take(1),
      tap(() => (this.submitSucces = true))
    ).subscribe();
  }

  ngOnDestroy(): void {
      this.httpPostSubscription.unsubscribe();
  }
}
