System.register(['angular2/core', './contacts/contact-list.component', './contacts/new-contact.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_list_component_1, new_contact_component_1, router_1, router_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (new_contact_component_1_1) {
                new_contact_component_1 = new_contact_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <header>\n    \t<nav>\n\t    \t<a [routerLink]=\"['Contacts']\">Contacts</a>\n\t    \t<a [routerLink]=\"['NewContact']\">New Contacts</a>\n    \t</nav>\n    </header>\n    <div class=\"main\">\n    \t<router-outlet></router-outlet>\n    </div>\n    <!--contact-list></contact-list-->\n    ",
                        directives: [contact_list_component_1.ContactListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        { path: "/contacts", name: 'Contacts', component: contact_list_component_1.ContactListComponent, useAsDefault: true },
                        { path: "/newcontact", name: 'NewContact', component: new_contact_component_1.NewContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBdEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx5U0FXVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyw2Q0FBb0IsRUFBQywwQkFBaUIsQ0FBQztxQkFDdkQsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNaLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFFO3dCQUMxRixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7cUJBQzNFLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29udGFjdExpc3RDb21wb25lbnR9IGZyb20gJy4vY29udGFjdHMvY29udGFjdC1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TmV3Q29udGFjdENvbXBvbmVudH0gZnJvbSAnLi9jb250YWN0cy9uZXctY29udGFjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG4gIFxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgXHQ8bmF2PlxyXG5cdCAgICBcdDxhIFtyb3V0ZXJMaW5rXT1cIlsnQ29udGFjdHMnXVwiPkNvbnRhY3RzPC9hPlxyXG5cdCAgICBcdDxhIFtyb3V0ZXJMaW5rXT1cIlsnTmV3Q29udGFjdCddXCI+TmV3IENvbnRhY3RzPC9hPlxyXG4gICAgXHQ8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICAgIFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tY29udGFjdC1saXN0PjwvY29udGFjdC1saXN0LS0+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW0NvbnRhY3RMaXN0Q29tcG9uZW50LFJPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG5cdHtwYXRoOiBcIi9jb250YWN0c1wiLCBuYW1lOiAnQ29udGFjdHMnLCBjb21wb25lbnQ6IENvbnRhY3RMaXN0Q29tcG9uZW50LHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG5cdHsgcGF0aDogXCIvbmV3Y29udGFjdFwiLCBuYW1lOiAnTmV3Q29udGFjdCcsIGNvbXBvbmVudDogTmV3Q29udGFjdENvbXBvbmVudCB9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
