import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component';
import {NewContactComponent} from './contacts/new-contact.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
  
@Component({
    selector: 'my-app',
    template: `
    <header>
    	<nav>
	    	<a [routerLink]="['Contacts']">Contacts</a>
	    	<a [routerLink]="['NewContact']">New Contacts</a>
    	</nav>
    </header>
    <div class="main">
    	<router-outlet></router-outlet>
    </div>
    <!--contact-list></contact-list-->
    `,
    directives: [ContactListComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: "/contacts", name: 'Contacts', component: ContactListComponent,useAsDefault: true },
	{ path: "/newcontact", name: 'NewContact', component: NewContactComponent }
])
export class AppComponent {

}
