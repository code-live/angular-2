System.register(['angular2/core', 'angular2/router', './contact.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, contact_service_1;
    var construct, NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router, _routeParmas) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParmas = _routeParmas;
                }
                NewContactComponent.prototype.onSubmit = function () {
                    this._contactService.insertContact(this.newContact);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent.prototype.ngOnInit = function () {
                    this.newContact = { firstname: "", lastname: this._routeParmas.get('lastname'), phone: "", email: "" };
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        template: "\n    <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    \t<div>\n\t        \t<label for=\"first-name\">First Name:</label>\n      \t\t\t<input type=\"text\" id=\"first-name\"\n      \t\t\tngControl=\"firstname\"\n      \t\t\t[(ngModel)]=\"newContact.firstname\"\n      \t\t\trequired\n      \t\t\t#firstname=\"ngForm\">\n      \t\t\t<span *ngIf=\"!firstname.valid\">not valid</span>\n\t    </div>\n      \t<div>\n\t\t      \t<label for=\"first-name\">Last Name:</label>\n\t\t      \t<input type=\"text\" id=\"last-name\"\n\t\t      \tngControl=\"lastname\"\n\t\t      \t[(ngModel)]=\"newContact.lastname\"\n      \t\t\trequired>\n\t    </div>\n      \t<div>\n\t\t      \t<label for=\"first-name\">Phone No:</label>\n\t\t      \t<input type=\"text\" id=\"phone\"\n\t\t      \tngControl=\"phone\"\n\t\t      \t[(ngModel)]=\"newContact.phone\"\n      \t\t\trequired>\n\t    </div>\n      \t<div>\n      \t\t\t<label for=\"first-name\">Email:</label>\n      \t\t\t<input type=\"text\" id=\"email\"\n      \t\t\tngControl=\"email\"\n      \t\t\t[(ngModel)]=\"newContact.email\"\n      \t\t\trequired>\n\t    </div> \n\t    <button type=\"submit\" [disabled]=\"!myForm.form.valid\">Create New Contact</button>\n\t</form>\n    ",
                        providers: [contact_service_1.ContactService],
                        styles: ["\n    \tlabel {\n    \t\tdisplay: inline-block;\n\t\t\twidth: 320px;\n\t\t}\t\n\t\t.ng-invalid{\n\t\t\tborder: 1px solid red;\n\t\t}\n    "]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_2.RouteParams])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL25ldy1jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBQ08sU0FBUzs7Ozs7Ozs7Ozs7Ozs7WUF1RGhCO2dCQUVDLDZCQUFvQixlQUFnQyxFQUFVLE9BQWdCLEVBQVUsWUFBMEI7b0JBQTlGLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO2dCQUVsSCxDQUFDO2dCQUNELHNDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQ0Qsc0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQ3hHLENBQUM7Z0JBMURGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLDZzQ0FrQ1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQzt3QkFDM0IsTUFBTSxFQUFFLENBQUMsNElBUVIsQ0FBQztxQkFDTCxDQUFDOzt1Q0FBQTtnQkFhRiwwQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQscURBWUMsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9uZXctY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCBjb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcclxuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtDb250YWN0Q29tcG9uZW50fSBmcm9tICcuL2NvbnRhY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250YWN0U2VydmljZX0gZnJvbSAnLi9jb250YWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxmb3JtICNteUZvcm09XCJuZ0Zvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgXHQ8ZGl2PlxyXG5cdCAgICAgICAgXHQ8bGFiZWwgZm9yPVwiZmlyc3QtbmFtZVwiPkZpcnN0IE5hbWU6PC9sYWJlbD5cclxuICAgICAgXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdC1uYW1lXCJcclxuICAgICAgXHRcdFx0bmdDb250cm9sPVwiZmlyc3RuYW1lXCJcclxuICAgICAgXHRcdFx0WyhuZ01vZGVsKV09XCJuZXdDb250YWN0LmZpcnN0bmFtZVwiXHJcbiAgICAgIFx0XHRcdHJlcXVpcmVkXHJcbiAgICAgIFx0XHRcdCNmaXJzdG5hbWU9XCJuZ0Zvcm1cIj5cclxuICAgICAgXHRcdFx0PHNwYW4gKm5nSWY9XCIhZmlyc3RuYW1lLnZhbGlkXCI+bm90IHZhbGlkPC9zcGFuPlxyXG5cdCAgICA8L2Rpdj5cclxuICAgICAgXHQ8ZGl2PlxyXG5cdFx0ICAgICAgXHQ8bGFiZWwgZm9yPVwiZmlyc3QtbmFtZVwiPkxhc3QgTmFtZTo8L2xhYmVsPlxyXG5cdFx0ICAgICAgXHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxhc3QtbmFtZVwiXHJcblx0XHQgICAgICBcdG5nQ29udHJvbD1cImxhc3RuYW1lXCJcclxuXHRcdCAgICAgIFx0WyhuZ01vZGVsKV09XCJuZXdDb250YWN0Lmxhc3RuYW1lXCJcclxuICAgICAgXHRcdFx0cmVxdWlyZWQ+XHJcblx0ICAgIDwvZGl2PlxyXG4gICAgICBcdDxkaXY+XHJcblx0XHQgICAgICBcdDxsYWJlbCBmb3I9XCJmaXJzdC1uYW1lXCI+UGhvbmUgTm86PC9sYWJlbD5cclxuXHRcdCAgICAgIFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwaG9uZVwiXHJcblx0XHQgICAgICBcdG5nQ29udHJvbD1cInBob25lXCJcclxuXHRcdCAgICAgIFx0WyhuZ01vZGVsKV09XCJuZXdDb250YWN0LnBob25lXCJcclxuICAgICAgXHRcdFx0cmVxdWlyZWQ+XHJcblx0ICAgIDwvZGl2PlxyXG4gICAgICBcdDxkaXY+XHJcbiAgICAgIFx0XHRcdDxsYWJlbCBmb3I9XCJmaXJzdC1uYW1lXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiXHJcbiAgICAgIFx0XHRcdG5nQ29udHJvbD1cImVtYWlsXCJcclxuICAgICAgXHRcdFx0WyhuZ01vZGVsKV09XCJuZXdDb250YWN0LmVtYWlsXCJcclxuICAgICAgXHRcdFx0cmVxdWlyZWQ+XHJcblx0ICAgIDwvZGl2PiBcclxuXHQgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0uZm9ybS52YWxpZFwiPkNyZWF0ZSBOZXcgQ29udGFjdDwvYnV0dG9uPlxyXG5cdDwvZm9ybT5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtDb250YWN0U2VydmljZV0sXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICBcdGxhYmVsIHtcclxuICAgIFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdHdpZHRoOiAzMjBweDtcclxuXHRcdH1cdFxyXG5cdFx0Lm5nLWludmFsaWR7XHJcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuXHRcdH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdDb250YWN0Q29tcG9uZW50ICBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRuZXdDb250YWN0OiBDb250YWN0O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRhY3RTZXJ2aWNlIDogQ29udGFjdFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlciA6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGVQYXJtYXMgOiBSb3V0ZVBhcmFtcyl7XHJcblxyXG5cdH1cclxuXHRvblN1Ym1pdCgpIHtcclxuXHRcdHRoaXMuX2NvbnRhY3RTZXJ2aWNlLmluc2VydENvbnRhY3QodGhpcy5uZXdDb250YWN0KTtcclxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0NvbnRhY3RzJ10pO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpOmFueXtcclxuXHRcdHRoaXMubmV3Q29udGFjdCA9IHsgZmlyc3RuYW1lOiBcIlwiLCBsYXN0bmFtZTogdGhpcy5fcm91dGVQYXJtYXMuZ2V0KCdsYXN0bmFtZScpLCBwaG9uZTogXCJcIiwgZW1haWw6IFwiXCIgfTtcclxuXHR9XHJcbn1cdFxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
