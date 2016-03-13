System.register(['angular2/core', './contact.component', './contact.service'], function(exports_1, context_1) {
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
    var core_1, contact_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.selectedContact = null;
                }
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContact().then(function (contacts) { return _this.contacts = contacts; });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        template: "<ul>\n    \t\t\t<li *ngFor=\"#contact of contacts\"\n    \t\t\t(click)=\"onSelect(contact)\"\n      \t\t\t[class.clicked]=\"selectedContact === contact\">{{contact.firstname}} {{contact.lastname}}</li>\n    \t\t</ul>\n    \t\t<contact *ngIf=\"selectedContact !== null\" [contact] = \"selectedContact\"></contact>\n    ",
                        directives: [contact_component_1.ContactComponent],
                        providers: [contact_service_1.ContactService],
                        styleUrls: ["../src/css/contact-list.css"]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBSUMsOEJBQXFCLGVBQWdDO29CQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBRDlDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUN5QixDQUFDO2dCQUN4RCx1Q0FBUSxHQUFSLFVBQVMsT0FBTztvQkFDZixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztnQkFDaEMsQ0FBQztnQkFDRCwwQ0FBVyxHQUFYO29CQUFBLGlCQUVDO29CQURBLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBbUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixDQUFDLENBQUM7Z0JBQzNGLENBQUM7Z0JBQ0QsdUNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBMUJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxnVUFNVDt3QkFDSixVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQzt3QkFDM0IsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7cUJBQzFDLENBQUM7O3dDQUFBO2dCQWVGLDJCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCx1REFjQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSAnLi9jb250YWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udGFjdFNlcnZpY2V9IGZyb20gJy4vY29udGFjdC5zZXJ2aWNlJztcclxuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbnRhY3QtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYDx1bD5cclxuICAgIFx0XHRcdDxsaSAqbmdGb3I9XCIjY29udGFjdCBvZiBjb250YWN0c1wiXHJcbiAgICBcdFx0XHQoY2xpY2spPVwib25TZWxlY3QoY29udGFjdClcIlxyXG4gICAgICBcdFx0XHRbY2xhc3MuY2xpY2tlZF09XCJzZWxlY3RlZENvbnRhY3QgPT09IGNvbnRhY3RcIj57e2NvbnRhY3QuZmlyc3RuYW1lfX0ge3tjb250YWN0Lmxhc3RuYW1lfX08L2xpPlxyXG4gICAgXHRcdDwvdWw+XHJcbiAgICBcdFx0PGNvbnRhY3QgKm5nSWY9XCJzZWxlY3RlZENvbnRhY3QgIT09IG51bGxcIiBbY29udGFjdF0gPSBcInNlbGVjdGVkQ29udGFjdFwiPjwvY29udGFjdD5cclxuICAgIGAsXHJcblx0ZGlyZWN0aXZlczogW0NvbnRhY3RDb21wb25lbnRdLFxyXG5cdHByb3ZpZGVyczogW0NvbnRhY3RTZXJ2aWNlXSxcclxuXHRzdHlsZVVybHM6IFtcIi4uL3NyYy9jc3MvY29udGFjdC1saXN0LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHB1YmxpYyBjb250YWN0cyA6IENvbnRhY3RbXTtcclxuXHJcblx0cHVibGljIHNlbGVjdGVkQ29udGFjdCA9IG51bGw7XHJcblx0Y29uc3RydWN0b3IgKHByaXZhdGUgX2NvbnRhY3RTZXJ2aWNlIDogQ29udGFjdFNlcnZpY2Upe31cclxuXHRvblNlbGVjdChjb250YWN0KXtcclxuXHRcdHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gY29udGFjdDtcclxuXHR9XHJcblx0Z2V0Q29udGFjdHMoKXtcclxuXHRcdHRoaXMuX2NvbnRhY3RTZXJ2aWNlLmdldENvbnRhY3QoKS50aGVuKChjb250YWN0czogQ29udGFjdFtdKSA9PiB0aGlzLmNvbnRhY3RzID0gY29udGFjdHMpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpOmFueSB7XHJcblx0XHR0aGlzLmdldENvbnRhY3RzKCk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
