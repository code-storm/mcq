webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constant; });
var constant = {
    GOOGLE_API_ACCESS_TOKEN: 'AIzaSyDOexI18o0lnHwfAZguEskqF8qPHZQO84M',
    ANSWERS: ['A', 'A', 'A', 'A', 'A', 'A']
};


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__online_test_online_test_component__ = __webpack_require__("./src/app/online-test/online-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_services_api_service__ = __webpack_require__("./src/app/utils/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__popups_popups_component__ = __webpack_require__("./src/app/popups/popups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_services_popup_service__ = __webpack_require__("./src/app/utils/services/popup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__report_report_component__ = __webpack_require__("./src/app/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__isuserconnected_guard__ = __webpack_require__("./src/app/isuserconnected.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__online_test_online_test_component__["a" /* OnlineTestComponent */],
                __WEBPACK_IMPORTED_MODULE_11__popups_popups_component__["a" /* PopupsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__report_report_component__["a" /* ReportComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_10__utils_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_12__utils_services_popup_service__["a" /* PopupService */], __WEBPACK_IMPORTED_MODULE_14__isuserconnected_guard__["a" /* IsuserconnectedGuard */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__popups_popups_component__["a" /* PopupsComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__online_test_online_test_component__ = __webpack_require__("./src/app/online-test/online-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_report_component__ = __webpack_require__("./src/app/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isuserconnected_guard__ = __webpack_require__("./src/app/isuserconnected.guard.ts");





var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'online-test',
        component: __WEBPACK_IMPORTED_MODULE_2__online_test_online_test_component__["a" /* OnlineTestComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__isuserconnected_guard__["a" /* IsuserconnectedGuard */]]
    },
    {
        path: 'generate-report',
        component: __WEBPACK_IMPORTED_MODULE_3__report_report_component__["a" /* ReportComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.accessFacebookUserDetails = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.accessQuestionanswers = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this.getFacebookUserDetails = this.accessFacebookUserDetails.asObservable();
        this.getQuestionanswers = this.accessQuestionanswers.asObservable();
    }
    DataService.prototype.setFacebookUserDetails = function (userDetails) {
        this.accessFacebookUserDetails.next(userDetails);
    };
    DataService.prototype.setQuestionsanswers = function (data) {
        this.accessQuestionanswers.next(data);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">MCQ</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline mt-2 mt-md-0\">\n      <span id=\"timer\" style=\"margin-right: 15px;color: white;\">00:00</span>\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"onFinish($event)\" type=\"button\">FINISH</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.finish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onFinish = function (event) {
        this.finish.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "finish", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/isuserconnected.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsuserconnectedGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IsuserconnectedGuard = /** @class */ (function () {
    function IsuserconnectedGuard(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    IsuserconnectedGuard.prototype.canActivate = function (next, state) {
        return this.checkFbUser();
    };
    IsuserconnectedGuard.prototype.checkFbUser = function () {
        var _this = this;
        var k = this.dataService.getFacebookUserDetails.switchMap(function (response) {
            if (response) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(true);
            }
            else {
                _this.router.navigateByUrl('login');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(false);
            }
        });
        return k;
    };
    IsuserconnectedGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], IsuserconnectedGuard);
    return IsuserconnectedGuard;
}());



/***/ }),

/***/ "./src/app/login/facebook.user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookUser; });
var FacebookUser = /** @class */ (function () {
    function FacebookUser(userId, email, name, profilePicture) {
        this.userId = userId;
        this.email = email;
        this.name = name;
        this.profilePicture = profilePicture;
    }
    return FacebookUser;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\"></div>\n  <div class=\"col-md-4\">\n    <div class=\"text-center mt-5\">\n      <form class=\"form-signin\">\n        <img class=\"mb-4\" src=\"https://avatars2.githubusercontent.com/u/15701284?s=460&v=4\" alt=\"\" width=\"72\" height=\"72\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">Login via Facebook</h1>\n        <a class=\"btn btn-lg btn-primary btn-block\" href=\"javascript:void(0);\" (click)=\"getLoginStatus()\">\n          <i class=\"fa fa-facebook\"></i> Sign in</a>\n        <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2018</p>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facebook_user__ = __webpack_require__("./src/app/login/facebook.user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '240875379640481',
                cookie: true,
                xfbml: true,
                version: 'v3.0'
            });
            FB.AppEvents.logPageView();
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };
    LoginComponent.prototype.getLoginStatus = function () {
        var _this = this;
        FB.getLoginStatus(function (response) {
            if (response.status === "authorization_expired") {
                _this.fbLogin();
            }
            else if (response.status === 'connected') {
                _this.fbMe();
            }
            console.log(response);
        });
    };
    LoginComponent.prototype.fbLogin = function () {
        FB.login(function (response) {
            console.log('login', response);
        }, { scope: 'email' });
    };
    LoginComponent.prototype.fbMe = function () {
        var _this = this;
        FB.api('/me?fields=id,name,email,picture', function (response) {
            console.log(response);
            var fbUser = new __WEBPACK_IMPORTED_MODULE_1__facebook_user__["a" /* FacebookUser */](response.id, response.email, response.name, response.picture.data.url);
            _this.dataService.setFacebookUserDetails(fbUser);
            _this.router.navigateByUrl('online-test');
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/online-test/online-test.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/online-test/online-test.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header (finish)=\"finishTest()\"></app-header>\n<div class=\"row reset\" style=\"margin-top: 100px;\">\n    <ul>\n        <li *ngFor=\"let each of questions; let qi = index\">\n            {{ each.quest }}\n            <div *ngFor=\"let enum of each.opts\">\n                <label for=\"{{qi}}_enum_answer_{{enum}}\">\n                    <input id=\"{{qi}}_enum_answer_{{enum}}\" [value]='enum' type=\"radio\" name=\"{{qi}}_enums\" [(ngModel)]=\"each.ans\"> {{enum}}\n                </label>\n            </div>\n        </li>\n    </ul>\n</div>\n<ng-template #popupContainer></ng-template>"

/***/ }),

/***/ "./src/app/online-test/online-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_services_api_service__ = __webpack_require__("./src/app/utils/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_services_popup_service__ = __webpack_require__("./src/app/utils/services/popup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OnlineTestComponent = /** @class */ (function () {
    function OnlineTestComponent(apiService, popupService, dataService, router) {
        this.apiService = apiService;
        this.popupService = popupService;
        this.dataService = dataService;
        this.router = router;
        this.questions = [];
        this.padZero = function (n) {
            return n < 10 ? '0' + n : n.toString();
        };
    }
    OnlineTestComponent.prototype.ngOnInit = function () {
        this.getQuestionFile();
        this.openStartTestPopup();
    };
    OnlineTestComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    OnlineTestComponent.prototype.getQuestionFile = function () {
        var _this = this;
        this.apiService.getQuestionFile()
            .subscribe(function (response) {
            console.log('File data', response);
            var splits = response.trim().split('\n');
            var allData = [];
            var fileIndex = 0;
            var obj = {};
            var section;
            splits.forEach(function (s) {
                s = s.trim();
                if (s === 'Electricity' || s === 'Physics' || s === 'Magnetism') {
                    section = s;
                    fileIndex = 0;
                }
                else {
                    if (fileIndex % 2 === 0) {
                        obj.quest = s;
                    }
                    else {
                        obj.opts = s.split(' ');
                        obj.section = section;
                        _this.questions.push(obj);
                        obj = {};
                    }
                    ++fileIndex;
                }
            });
        });
    };
    OnlineTestComponent.prototype.openStartTestPopup = function () {
        var setting = {
            popupContainer: this.popupContainer,
            popupHeading: 'Start Test',
            popupBody: 'Press start to begin test',
            yesText: 'Start Test',
            popupBody2: null,
            yesFunction: this.startTest.bind(this)
        };
        this.popupService.openStartTestDialog(setting);
    };
    OnlineTestComponent.prototype.startTest = function () {
        var _this = this;
        var timerMinutes = 15 * 60 * 1000; // in millisec
        var countDownDate = new Date().getTime() + timerMinutes;
        this.interval = setInterval(function () {
            var now = new Date().getTime();
            var diff = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((diff % (1000 * 60)) / 1000);
            // Display the result in the element with id="demo"
            document.getElementById("timer").innerHTML = _this.padZero(minutes) + ":" + _this.padZero(seconds);
            // If the count down is finished, write some text 
            if (diff < 0) {
                clearInterval(_this.interval);
                document.getElementById("timer").innerHTML = "--:--";
                _this.finishTest();
                console.info('Ending test');
            }
        });
    };
    OnlineTestComponent.prototype.finishTest = function () {
        var setting = {
            popupContainer: this.popupContainer,
            popupHeading: 'Your test is finished',
            popupBody: 'Press Get Report to see results',
            yesText: 'Get report',
            popupBody2: null,
            yesFunction: this.getReport.bind(this)
        };
        this.popupService.openStartTestDialog(setting);
        this.dataService.setQuestionsanswers(this.questions);
    };
    OnlineTestComponent.prototype.getReport = function () {
        this.router.navigateByUrl('generate-report');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('popupContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */] }),
        __metadata("design:type", Object)
    ], OnlineTestComponent.prototype, "popupContainer", void 0);
    OnlineTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-online-test',
            template: __webpack_require__("./src/app/online-test/online-test.component.html"),
            styles: [__webpack_require__("./src/app/online-test/online-test.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__utils_services_popup_service__["a" /* PopupService */],
            __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], OnlineTestComponent);
    return OnlineTestComponent;
}());



/***/ }),

/***/ "./src/app/popups/popups.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    z-index: 10001;\r\n    background-color: #ffffffa6;\r\n}\r\n.popup-cont {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 99;\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    overflow-y: auto;\r\n  }\r\n.popup-outer {\r\n    width: 608px;\r\n    background-color: #ffffff;\r\n    -webkit-box-shadow: 0 1px 3px 2px rgba(167, 167, 167, 0.5);\r\n            box-shadow: 0 1px 3px 2px rgba(167, 167, 167, 0.5);\r\n    position: absolute;\r\n    left: 50%;\r\n    margin-left: -304px;\r\n    top: 80px;\r\n    padding: 15px 0 0px;\r\n    margin-bottom: 7px;\r\n  }"

/***/ }),

/***/ "./src/app/popups/popups.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\" id=\"exampleModalLongTitle\"> {{ popupHeading }}</h5>\n      <button type=\"button\" class=\"close\" (click)=\"closePopup();\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      {{ popupBody }}\n    </div>\n    <div class=\"modal-footer\">\n      <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button> -->\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"yesFunction();closePopup();\">{{ yesText}}</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/popups/popups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupsComponent = /** @class */ (function () {
    function PopupsComponent() {
        this.popupHeading = '';
        this.popupBody = '';
        this.popupBody2 = '';
        this.yesText = '';
    }
    PopupsComponent.prototype.ngOnInit = function () {
    };
    PopupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-popups',
            template: __webpack_require__("./src/app/popups/popups.component.html"),
            styles: [__webpack_require__("./src/app/popups/popups.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopupsComponent);
    return PopupsComponent;
}());



/***/ }),

/***/ "./src/app/report/report.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"report-img\"></div>\n<div id=\"chart_div\"></div>"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportComponent = /** @class */ (function () {
    function ReportComponent(dataService) {
        this.dataService = dataService;
        this.correctAnswers = [];
        this.subscription = [];
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this.dataService.getQuestionanswers.subscribe(function (response) {
            console.log('efef', response);
            ['Magnetism', 'Electricity', 'Physics'].forEach(function (value) {
                var filteredData = response.filter(function (r, i) { return r.ans && r.section === value && r.ans === __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* constant */].ANSWERS[i]; });
                _this.correctAnswers.push([value, filteredData.length]);
            });
            _this.googleChartInit(_this.correctAnswers);
        });
        this.subscription.push(sub);
    };
    ReportComponent.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    ReportComponent.prototype.googleChartInit = function (paramData) {
        // Load the Visualization API and the corechart package.
        google.charts.load('current', { 'packages': ['corechart'] });
        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawChart);
        // Callback that creates and populates a data table,
        // instantiates the pie chart, passes in the data and
        // draws it.
        function drawChart() {
            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Section');
            data.addColumn('number', 'Correct Answers');
            // data.addColumn('number', 'Physics');
            // data.addColumn('string', 'Pizza topping');
            // data.addColumn('number', 'Slices');
            console.log(paramData);
            data.addRows(paramData);
            // Set chart options
            var options = {
                'title': 'Correct Answers in Physics, Electricity, Magnetism',
                'width': 400,
                'height': 300
            };
            var chart_div = document.getElementById('chart_div');
            var chart = new google.visualization.ColumnChart(chart_div);
            // Wait for the chart to finish drawing before calling the getImageURI() method.
            google.visualization.events.addListener(chart, 'ready', function () {
                var fbHref = '//www.facebook.com/sharer/sharer.php?u=' + chart.getImageURI();
                chart_div.innerHTML = "<a target='_blank' onclick='return !window.open(this.href, \"Facebook\", \"width=640,height=300\")' href='" + fbHref + "'>  <img src='" + chart.getImageURI() + "'> </a>";
                console.log(chart_div.innerHTML);
            });
            chart.draw(data, options);
        }
    };
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-report',
            template: __webpack_require__("./src/app/report/report.component.html"),
            styles: [__webpack_require__("./src/app/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/utils/api.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIURLs; });
var APIURLs = {
    getGoogleDriveFile: function (fileId) { return 'https://www.googleapis.com/drive/v3/files/' + fileId; }
};


/***/ }),

/***/ "./src/app/utils/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_constant__ = __webpack_require__("./src/app/utils/api.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.fileId = '1ABMsTr-Dd3yg7dl2Jq9vUd4zEFk3oS3P';
    }
    ApiService.prototype.getQuestionFile = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_constant__["a" /* APIURLs */].getGoogleDriveFile(this.fileId), { responseType: 'text', params: { key: __WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* constant */].GOOGLE_API_ACCESS_TOKEN, alt: 'media' } });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/utils/services/popup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popups_popups_component__ = __webpack_require__("./src/app/popups/popups.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupService = /** @class */ (function () {
    function PopupService(resolver) {
        this.resolver = resolver;
    }
    PopupService.prototype.openStartTestDialog = function (setting) {
        setting.popupContainer.clear();
        var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__popups_popups_component__["a" /* PopupsComponent */]);
        var componentRef = setting.popupContainer.createComponent(factory);
        if (setting.popupHeading) {
            componentRef.instance.popupHeading = setting.popupHeading;
        }
        if (setting.popupBody) {
            componentRef.instance.popupBody = setting.popupBody;
        }
        if (setting.popupBody2) {
            componentRef.instance.popupBody2 = setting.popupBody2;
        }
        if (setting.yesText) {
            componentRef.instance.yesText = setting.yesText;
        }
        componentRef.instance.yesFunction = setting.yesFunction;
        componentRef.instance._ref = componentRef;
        componentRef.instance.closePopup = function () {
            componentRef.destroy();
        };
    };
    PopupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], PopupService);
    return PopupService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map