import {Component} from 'angular2/core';

import {ContactService} from './contact.service'; 
import {Router} from 'angular2/router';
import {Contact} from "./contact";
@Component({
    selector: 'contact',
    template: `
    <div>
	    <div>
	        	<label for="first-name">First Name:</label>
      			<input [(ngModel)]="contact.firstname" type="text" id="first-name">
	    </div>
      	<div>
		      	<label for="first-name">Last Name:</label>
		      	<input [(ngModel)]="contact.lastname" type="text" id="last-name">
	    </div>
      	<div>
		      	<label for="first-name">Phone No:</label>
		      	<input [(ngModel)]="contact.phone" type="text" id="phone">
	    </div>
      	<div>
      			<label for="first-name">Email:</label>
      			<input [(ngModel)]="contact.email" type="text" id="email">
	    </div>
      <button (click)="onCreateNew()">Create Contact from this contact</button>
    </div>  
    `,
    inputs : ["contact"],
    styles : [`
    	label {
    		display: inline-block;  
			width: 320px;
		}	
    `]
})
export class ContactComponent {
  public contact: Contact = null;
  constructor(private _router: Router){}
	onCreateNew(){
    console.log("contact", this.contact);
    this._router.navigate(['NewContact', { lastname: this.contact.lastname }]);
  }
}
