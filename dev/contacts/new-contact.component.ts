import {Component} from 'angular2/core';
import construct = Reflect.construct;
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';
import {Contact} from "./contact";

@Component({
    template: `
    <form #myForm="ngForm" (ngSubmit)="onSubmit()">
    	<div>
	        	<label for="first-name">First Name:</label>
      			<input type="text" id="first-name"
      			ngControl="firstname"
      			[(ngModel)]="newContact.firstname"
      			required
      			#firstname="ngForm">
      			<span *ngIf="!firstname.valid">not valid</span>
	    </div>
      	<div>
		      	<label for="first-name">Last Name:</label>
		      	<input type="text" id="last-name"
		      	ngControl="lastname"
		      	[(ngModel)]="newContact.lastname"
      			required>
	    </div>
      	<div>
		      	<label for="first-name">Phone No:</label>
		      	<input type="text" id="phone"
		      	ngControl="phone"
		      	[(ngModel)]="newContact.phone"
      			required>
	    </div>
      	<div>
      			<label for="first-name">Email:</label>
      			<input type="text" id="email"
      			ngControl="email"
      			[(ngModel)]="newContact.email"
      			required>
	    </div> 
	    <button type="submit" [disabled]="!myForm.form.valid">Create New Contact</button>
	</form>
    `,
    providers: [ContactService],
    styles: [`
    	label {
    		display: inline-block;
			width: 320px;
		}	
		.ng-invalid{
			border: 1px solid red;
		}
    `]
})
export class NewContactComponent  implements OnInit{
	newContact: Contact;
	constructor(private _contactService : ContactService, private _router : Router, private _routeParmas : RouteParams){

	}
	onSubmit() {
		this._contactService.insertContact(this.newContact);
		this._router.navigate(['Contacts']);
	}
	ngOnInit():any{
		this.newContact = { firstname: "", lastname: this._routeParmas.get('lastname'), phone: "", email: "" };
	}
}	
