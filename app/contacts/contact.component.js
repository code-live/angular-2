System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                    this.contact = null;
                }
                ContactComponent.prototype.onCreateNew = function () {
                    console.log("contact", this.contact);
                    this._router.navigate(['NewContact', { lastname: this.contact.lastname }]);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "\n    <div>\n\t    <div>\n\t        \t<label for=\"first-name\">First Name:</label>\n      \t\t\t<input [(ngModel)]=\"contact.firstname\" type=\"text\" id=\"first-name\">\n\t    </div>\n      \t<div>\n\t\t      \t<label for=\"first-name\">Last Name:</label>\n\t\t      \t<input [(ngModel)]=\"contact.lastname\" type=\"text\" id=\"last-name\">\n\t    </div>\n      \t<div>\n\t\t      \t<label for=\"first-name\">Phone No:</label>\n\t\t      \t<input [(ngModel)]=\"contact.phone\" type=\"text\" id=\"phone\">\n\t    </div>\n      \t<div>\n      \t\t\t<label for=\"first-name\">Email:</label>\n      \t\t\t<input [(ngModel)]=\"contact.email\" type=\"text\" id=\"email\">\n\t    </div>\n      <button (click)=\"onCreateNew()\">Create Contact from this contact</button>\n    </div>  \n    ",
                        inputs: ["contact"],
                        styles: ["\n    \tlabel {\n    \t\tdisplay: inline-block;  \n\t\t\twidth: 320px;\n\t\t}\t\n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0NBO2dCQUVFLDBCQUFvQixPQUFlO29CQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBRDVCLFlBQU8sR0FBWSxJQUFJLENBQUM7Z0JBQ00sQ0FBQztnQkFDdkMsc0NBQVcsR0FBWDtvQkFDRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO2dCQXJDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUsa3hCQW9CVDt3QkFDRCxNQUFNLEVBQUcsQ0FBQyxTQUFTLENBQUM7d0JBQ3BCLE1BQU0sRUFBRyxDQUFDLHVGQUtULENBQUM7cUJBQ0wsQ0FBQzs7b0NBQUE7Z0JBUUYsdUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELCtDQU9DLENBQUEiLCJmaWxlIjoiY29udGFjdHMvY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSBmcm9tICcuL2NvbnRhY3Quc2VydmljZSc7IFxyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb250YWN0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG5cdCAgICA8ZGl2PlxyXG5cdCAgICAgICAgXHQ8bGFiZWwgZm9yPVwiZmlyc3QtbmFtZVwiPkZpcnN0IE5hbWU6PC9sYWJlbD5cclxuICAgICAgXHRcdFx0PGlucHV0IFsobmdNb2RlbCldPVwiY29udGFjdC5maXJzdG5hbWVcIiB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3QtbmFtZVwiPlxyXG5cdCAgICA8L2Rpdj5cclxuICAgICAgXHQ8ZGl2PlxyXG5cdFx0ICAgICAgXHQ8bGFiZWwgZm9yPVwiZmlyc3QtbmFtZVwiPkxhc3QgTmFtZTo8L2xhYmVsPlxyXG5cdFx0ICAgICAgXHQ8aW5wdXQgWyhuZ01vZGVsKV09XCJjb250YWN0Lmxhc3RuYW1lXCIgdHlwZT1cInRleHRcIiBpZD1cImxhc3QtbmFtZVwiPlxyXG5cdCAgICA8L2Rpdj5cclxuICAgICAgXHQ8ZGl2PlxyXG5cdFx0ICAgICAgXHQ8bGFiZWwgZm9yPVwiZmlyc3QtbmFtZVwiPlBob25lIE5vOjwvbGFiZWw+XHJcblx0XHQgICAgICBcdDxpbnB1dCBbKG5nTW9kZWwpXT1cImNvbnRhY3QucGhvbmVcIiB0eXBlPVwidGV4dFwiIGlkPVwicGhvbmVcIj5cclxuXHQgICAgPC9kaXY+XHJcbiAgICAgIFx0PGRpdj5cclxuICAgICAgXHRcdFx0PGxhYmVsIGZvcj1cImZpcnN0LW5hbWVcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICBcdFx0XHQ8aW5wdXQgWyhuZ01vZGVsKV09XCJjb250YWN0LmVtYWlsXCIgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCI+XHJcblx0ICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIChjbGljayk9XCJvbkNyZWF0ZU5ldygpXCI+Q3JlYXRlIENvbnRhY3QgZnJvbSB0aGlzIGNvbnRhY3Q8L2J1dHRvbj5cclxuICAgIDwvZGl2PiAgXHJcbiAgICBgLFxyXG4gICAgaW5wdXRzIDogW1wiY29udGFjdFwiXSxcclxuICAgIHN0eWxlcyA6IFtgXHJcbiAgICBcdGxhYmVsIHtcclxuICAgIFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcclxuXHRcdFx0d2lkdGg6IDMyMHB4O1xyXG5cdFx0fVx0XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCB7XHJcbiAgcHVibGljIGNvbnRhY3Q6IENvbnRhY3QgPSBudWxsO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKXt9XHJcblx0b25DcmVhdGVOZXcoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiY29udGFjdFwiLCB0aGlzLmNvbnRhY3QpO1xyXG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTmV3Q29udGFjdCcsIHsgbGFzdG5hbWU6IHRoaXMuY29udGFjdC5sYXN0bmFtZSB9XSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
