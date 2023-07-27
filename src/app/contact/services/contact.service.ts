import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContactRequest } from '../model/contact-request.model';
import { Web3FormsService } from './web3forms.service';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private web3FormsService: Web3FormsService) {}

    submitContactForm(contact: IContactRequest): Observable<IContactRequest> {
        return this.web3FormsService.post(contact);
    }
}