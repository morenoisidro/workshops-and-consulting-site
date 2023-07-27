import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpBaseService } from '../../core/services/http-base.service';
import { IContactRequest } from '../model/contact-request.model';

@Injectable({
    providedIn: 'root'
})
export class Web3FormsService {

    constructor(private httpBaseService: HttpBaseService) { }

    post(contact: IContactRequest): Observable<IContactRequest> {
        contact.access_key = environment.web3FormsApiKey;
        return this.httpBaseService.post<IContactRequest>(environment.web3FormsUrl, contact);
    }
}