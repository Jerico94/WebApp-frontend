import { Component } from '@angular/core';
import {ContactService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService]
})
export class AppComponent {
  title = 'Ethan Davis';
  contact: any = {};

  constructor(public contactService: ContactService){
   this.getContact();
  }

  getContact(): any {
     this.contactService.getContact().subscribe(contact=>{
        this.contact = contact;
     })
  }

  createContact(person): any {
    this.contactService.createContact(person);
  }
}
