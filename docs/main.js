(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 6715);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 1402);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.service */ 4056);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.service */ 8986);
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 1217);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _tab_group_tab_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab-group/tab-group.component */ 2237);
/* harmony import */ var _tab_group_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tab-group/tab-item/tab-item.component */ 388);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent, _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _tab_group_tab_group_component__WEBPACK_IMPORTED_MODULE_9__.TabGroupComponent, _tab_group_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_10__.TabItemComponent, _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
  })],
  providers: [_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);



const appRoutes = [{
  path: '',
  component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 9289:
/*!************************************!*\
  !*** ./src/app/caching.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CachingService: () => (/* binding */ CachingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CachingService = class CachingService {
  constructor() {
    this.refetchInterval = 2 * (60 * 60); //using seconds, the 2 is hours multiplied by minutes and seconds
  }

  get refetchIntervalInMS() {
    return this.refetchInterval * 1000;
  }
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localstorage', e);
      return null;
    }
  }
  set(key, obj) {
    const data = JSON.stringify(obj);
    try {
      localStorage.setItem(key, data);
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  remove(key) {
    localStorage.removeItem(key);
  }
  getMillisecondsNow() {
    const currentDate = new Date();
    return currentDate.getTime();
  }
  shouldRefetchData(timeStamp) {
    return this.getMillisecondsNow() - timeStamp > this.refetchIntervalInMS;
  }
};
CachingService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: 'root'
})], CachingService);


/***/ }),

/***/ 1217:
/*!********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 9139);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 2340);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 8986);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../location.service */ 4056);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService);
    this.currentConditionsByZip = this.weatherService.getCurrentConditions();
    this.activeTabIndex = 0;
  }
  getTabs() {
    return this.currentConditionsByZip().map(condition => `${condition.data.name} (${condition.zip})`);
  }
  closeTab(index) {
    this.locationService.removeLocation(this.currentConditionsByZip()[index].zip);
  }
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 64:
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 4517);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 7854);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 8986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ForecastsListComponent = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      weatherService.analyzeForecast(this.zipcode).subscribe(data => this.forecast = data);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }];
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 8968:
/*!***************************!*\
  !*** ./src/app/helper.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareArrays: () => (/* binding */ compareArrays)
/* harmony export */ });
const compareArrays = (array1, array2) => {
  return array1.filter(element => !array2.includes(element));
};

/***/ }),

/***/ 4056:
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 462);
/* harmony import */ var _caching_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caching.service */ 9289);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const LOCATIONS = "locations";
let LocationService = class LocationService {
  constructor() {
    this.locations = [];
    this.locationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.locations);
    this.cachingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_caching_service__WEBPACK_IMPORTED_MODULE_0__.CachingService);
    this.locations$ = this.locationsSubject.asObservable();
    let locString = this.cachingService.get(LOCATIONS);
    if (locString) {
      this.locations = locString;
      this.locationsSubject.next(this.locations);
    }
  }
  addLocation(zipcode) {
    this.locations.push(zipcode);
    this.updateLocationSubject();
  }
  removeLocation(zipcode) {
    let index = this.locations.indexOf(zipcode);
    if (index !== -1) {
      this.locations.splice(index, 1);
      this.updateLocationSubject();
    }
  }
  updateLocationSubject() {
    this.locationsSubject.next(this.locations);
    this.cachingService.set(LOCATIONS, this.locations);
  }
  static #_ = this.ctorParameters = () => [];
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], LocationService);


/***/ }),

/***/ 1152:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 8132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 2237:
/*!**************************************************!*\
  !*** ./src/app/tab-group/tab-group.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabGroupComponent: () => (/* binding */ TabGroupComponent)
/* harmony export */ });
/* harmony import */ var _tab_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-group.component.html?ngResource */ 8576);
/* harmony import */ var _tab_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-group.component.css?ngResource */ 5549);
/* harmony import */ var _tab_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TabGroupComponent = class TabGroupComponent {
  constructor() {
    this.tabs = [];
    this.closeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.activeTabIndex = 0;
    this.activeTabIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  onCloseTab(i) {
    this.closeTab.emit(i);
    this.onSelectTab(i - 1);
  }
  onSelectTab(i) {
    this.activeTabIndex = i;
    this.activeTabIndexChange.emit(this.activeTabIndex);
  }
  static #_ = this.propDecorators = {
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    closeTab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    activeTabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    activeTabIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  };
};
TabGroupComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tab-group',
  template: _tab_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  styles: [(_tab_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabGroupComponent);


/***/ }),

/***/ 388:
/*!**********************************************************!*\
  !*** ./src/app/tab-group/tab-item/tab-item.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabItemComponent: () => (/* binding */ TabItemComponent)
/* harmony export */ });
/* harmony import */ var _tab_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-item.component.html?ngResource */ 2514);
/* harmony import */ var _tab_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-item.component.css?ngResource */ 6492);
/* harmony import */ var _tab_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TabItemComponent = class TabItemComponent {
  static #_ = this.propDecorators = {
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    activeTabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
TabItemComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tab-item',
  template: _tab_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  styles: [(_tab_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabItemComponent);


/***/ }),

/***/ 8986:
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONDITIONS: () => (/* binding */ CONDITIONS),
/* harmony export */   FORECASTS: () => (/* binding */ FORECASTS),
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4614);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 502);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 3994);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7965);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8678);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 8175);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.service */ 4056);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ 8968);
/* harmony import */ var _caching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caching.service */ 9289);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;







const CONDITIONS = "conditions";
const FORECASTS = "forecasts";
let WeatherService = class WeatherService {
  static #_ = WeatherService_1 = this;
  static #_2 = this.URL = 'https://api.openweathermap.org/data/2.5';
  static #_3 = this.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static #_4 = this.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  constructor(http, locationService, cachingService) {
    this.http = http;
    this.locationService = locationService;
    this.cachingService = cachingService;
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)([]);
    this.fiveDayForecasts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)([]);
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.getForecastsFromCache();
    this.subscription.add(this.locationService.locations$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(locations => {
      const removeArray = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.compareArrays)(this.currentConditions().map(location => location.zip), locations);
      if (removeArray.length > 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(removeArray).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.concatMap)(data => this.removeZipCode(data)));
      } else {
        this.currentConditions.update(() => []);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(locations).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(data => this.analyzeCacheConditions(data)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.toArray)());
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => {
      this.cachingService.set(CONDITIONS, this.currentConditions());
    })).subscribe());
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getForecastsFromCache() {
    let forecastData = this.cachingService.get(FORECASTS);
    if (forecastData) {
      this.fiveDayForecasts.update(forecast => {
        return [...forecastData, ...forecast];
      });
    }
  }
  removeZipCode(zipcode) {
    this.removeCurrentConditions(zipcode);
    this.removeFiveDayForecasts(zipcode);
    this.cachingService.set(FORECASTS, this.fiveDayForecasts());
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)();
  }
  removeCurrentConditions(zipcode) {
    this.currentConditions.update(conditions => {
      for (let i in conditions) {
        if (conditions[i].zip == zipcode) conditions.splice(+i, 1);
      }
      return conditions;
    });
  }
  removeFiveDayForecasts(zipcode) {
    this.fiveDayForecasts.update(forecast => {
      for (let i in forecast) {
        if (forecast[i].zip == zipcode) forecast.splice(+i, 1);
      }
      return forecast;
    });
  }
  getCurrentConditions() {
    return this.currentConditions.asReadonly();
  }
  analyzeForecast(zipcode) {
    let cacheForecast = this.cachingService.get(FORECASTS) || [];
    let zipcodeIndex = cacheForecast.findIndex(forecast => {
      return zipcode === forecast.zip;
    });
    let request = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(null);
    if (zipcodeIndex !== -1) {
      if (this.cachingService.shouldRefetchData(cacheForecast[zipcodeIndex].timeStamp)) request = this.getForecast(zipcode);else return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(cacheForecast[zipcodeIndex].data);
    } else request = this.getForecast(zipcode);
    return request;
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return WeatherService_1.ICON_URL + "art_storm.png";else if (id >= 501 && id <= 511) return WeatherService_1.ICON_URL + "art_rain.png";else if (id === 500 || id >= 520 && id <= 531) return WeatherService_1.ICON_URL + "art_light_rain.png";else if (id >= 600 && id <= 622) return WeatherService_1.ICON_URL + "art_snow.png";else if (id >= 801 && id <= 804) return WeatherService_1.ICON_URL + "art_clouds.png";else if (id === 741 || id === 761) return WeatherService_1.ICON_URL + "art_fog.png";else return WeatherService_1.ICON_URL + "art_clear.png";
  }
  analyzeCacheConditions(zipcode) {
    let httpRequest = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(null);
    let cacheConditions = this.cachingService.get(CONDITIONS) || [];
    let zipcodeIndex = cacheConditions.findIndex(condition => {
      return zipcode === condition.zip;
    });
    if (zipcodeIndex !== -1) {
      //check if condition in cache
      if (this.cachingService.shouldRefetchData(cacheConditions[zipcodeIndex].timeStamp)) httpRequest = this.fetchCurrentConditions(zipcode); //if condition's time has expired, fetch
      else this.currentConditions.update(conditions => [...conditions, {
        ...cacheConditions[zipcodeIndex]
      }]); //if condition's time has not expired, update signal
    } else httpRequest = this.fetchCurrentConditions(zipcode); //if condition not in cache, fetch
    return httpRequest;
  }
  fetchCurrentConditions(zipcode) {
    return this.http.get(`${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(data => {
      this.currentConditions.update(conditions => [...conditions, {
        zip: zipcode,
        data,
        timeStamp: this.cachingService.getMillisecondsNow()
      }]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
      this.locationService.removeLocation(zipcode);
      alert('Unable to fetch zipcode');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)(error);
    }));
  }
  getForecast(zipcode) {
    return this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(data => {
      let index = this.fiveDayForecasts().findIndex(forecast => forecast.zip === zipcode);
      if (index === -1) this.fiveDayForecasts.update(fiveDayForecasts => [...fiveDayForecasts, {
        zip: zipcode,
        data,
        timeStamp: this.cachingService.getMillisecondsNow()
      }]);else this.fiveDayForecasts.update(fiveDayForecasts => fiveDayForecasts.map(forecast => forecast.zip === zipcode ? {
        zip: zipcode,
        data,
        timeStamp: this.cachingService.getMillisecondsNow()
      } : forecast));
      this.cachingService.set(FORECASTS, this.fiveDayForecasts());
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
      this.locationService.removeLocation(zipcode);
      alert('Unable to fetch zipcode');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)(error);
    }));
  }
  static #_5 = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient
  }, {
    type: _location_service__WEBPACK_IMPORTED_MODULE_0__.LocationService
  }, {
    type: _caching_service__WEBPACK_IMPORTED_MODULE_2__.CachingService
  }];
};
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], WeatherService);


/***/ }),

/***/ 1402:
/*!**********************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 7606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../location.service */ 4056);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor(service) {
    this.service = service;
  }
  addLocation(zipcode) {
    if (!zipcode) {
      alert('You must enter a value');
      return;
    }
    this.service.addLocation(zipcode);
    this.zipcode.nativeElement.value = '';
  }
  static #_ = this.ctorParameters = () => [{
    type: _location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService
  }];
  static #_2 = this.propDecorators = {
    zipcode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['zipcode']
    }]
  };
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 6715:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2340:
/*!********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.close {
  cursor: pointer;
}
.flex {
  display: flex;
  justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/app/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;AAChC","sourcesContent":[".close {\r\n  cursor: pointer;\r\n}\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7854:
/*!************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5549:
/*!**************************************************************!*\
  !*** ./src/app/tab-group/tab-group.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tab-group{
    .tab-header{
        ul{
            display: flex;
            flex-wrap: wrap;
            padding: 0;
            list-style-type: none;
            margin: 0;
            li{
                padding: 10px;
                background: rgb(97,122,160);
                color: #fff;
                margin-right: 5px;
                border: 1px solid black;
                &.active{
                    background-color: #f5f5f5;
                    color: black;
                    font-weight: bold;
                    a{
                        color: black;
                    }
                }
                &:hover{
                    cursor: pointer;
                }
                span{
                    margin-right: 20px;
                }
                a{
                    color: #fff;
                    &:hover{
                        text-decoration: none;
                    }
                }
            }
        }
    }
}`, "",{"version":3,"sources":["webpack://./src/app/tab-group/tab-group.component.css"],"names":[],"mappings":"AAAA;IACI;QACI;YACI,aAAa;YACb,eAAe;YACf,UAAU;YACV,qBAAqB;YACrB,SAAS;YACT;gBACI,aAAa;gBACb,2BAA2B;gBAC3B,WAAW;gBACX,iBAAiB;gBACjB,uBAAuB;gBACvB;oBACI,yBAAyB;oBACzB,YAAY;oBACZ,iBAAiB;oBACjB;wBACI,YAAY;oBAChB;gBACJ;gBACA;oBACI,eAAe;gBACnB;gBACA;oBACI,kBAAkB;gBACtB;gBACA;oBACI,WAAW;oBACX;wBACI,qBAAqB;oBACzB;gBACJ;YACJ;QACJ;IACJ;AACJ","sourcesContent":[".tab-group{\r\n    .tab-header{\r\n        ul{\r\n            display: flex;\r\n            flex-wrap: wrap;\r\n            padding: 0;\r\n            list-style-type: none;\r\n            margin: 0;\r\n            li{\r\n                padding: 10px;\r\n                background: rgb(97,122,160);\r\n                color: #fff;\r\n                margin-right: 5px;\r\n                border: 1px solid black;\r\n                &.active{\r\n                    background-color: #f5f5f5;\r\n                    color: black;\r\n                    font-weight: bold;\r\n                    a{\r\n                        color: black;\r\n                    }\r\n                }\r\n                &:hover{\r\n                    cursor: pointer;\r\n                }\r\n                span{\r\n                    margin-right: 20px;\r\n                }\r\n                a{\r\n                    color: #fff;\r\n                    &:hover{\r\n                        text-decoration: none;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6492:
/*!**********************************************************************!*\
  !*** ./src/app/tab-group/tab-item/tab-item.component.css?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tab-item{
    border: 2px solid black;
    padding: 20px;
}`, "",{"version":3,"sources":["webpack://./src/app/tab-group/tab-item/tab-item.component.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,aAAa;AACjB","sourcesContent":[".tab-item{\r\n    border: 2px solid black;\r\n    padding: 20px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 9139:
/*!*********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-tab-group [tabs]=\"getTabs()\" (closeTab)=\"closeTab($event)\" [(activeTabIndex)]=\"activeTabIndex\">\r\n  <app-tab-item  *ngFor=\"let location of currentConditionsByZip();let i = index\" [index]=\"i\" [activeTabIndex]=\"activeTabIndex\">\r\n    <div class=\"well flex\">\r\n      <div>\r\n        <h4>Current conditions: {{location.data.weather[0].main}}</h4>\r\n        <h4>Temperatures today:</h4>\r\n        <p>\r\n          Current {{location.data.main.temp | number:'.0-0'}}\r\n          - Max {{location.data.main.temp_max | number:'.0-0'}}\r\n          - Min {{location.data.main.temp_min | number:'.0-0'}}\r\n        </p>\r\n        <p>\r\n          <a [routerLink]=\"['/forecast', location.zip]\" >Show 5-day forecast for {{location.data.name}}</a>\r\n        </p>\r\n      </div>\r\n      <div>\r\n        <img [src]=\"weatherService.getWeatherIcon(location.data.weather[0].id)\">\r\n      </div>\r\n   </div>\r\n  </app-tab-item>\r\n  \r\n</app-tab-group>\r\n";

/***/ }),

/***/ 4517:
/*!*************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">5-day forecast for {{forecast?.city.name}}</h3>\r\n\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\r\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\r\n        {{dailyForecast.weather[0].main}}\r\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\r\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\r\n\r\n        <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\">\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<button class=\"btn btn-success\" [routerLink]=\"'/'\" >< Back to main page</button>\r\n";

/***/ }),

/***/ 8132:
/*!***************************************************************!*\
  !*** ./src/app/main-page/main-page.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n\r\n  <app-zipcode-entry> </app-zipcode-entry>\r\n  <app-current-conditions></app-current-conditions>\r\n\r\n</div>\r\n";

/***/ }),

/***/ 8576:
/*!***************************************************************!*\
  !*** ./src/app/tab-group/tab-group.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"tab-group\">\r\n    <div class=\"tab-header\">\r\n        @if(tabs.length > 0){\r\n            <ul>\r\n                @for(tabName of tabs;let i = $index; track i;  ){\r\n                    <li \r\n                    [class.active]=\"i===activeTabIndex\"\r\n                     class=\"tab-item-header\"\r\n                     (click)=\"onSelectTab(i)\">\r\n                        <span>{{tabName}}</span> <a\r\n                        (click)=\"onCloseTab(i)\" href=\"javascript:void(0)\" >X</a>\r\n                    </li>\r\n                }\r\n            </ul>\r\n        }\r\n    </div>\r\n    <div class=\"tab-content\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 2514:
/*!***********************************************************************!*\
  !*** ./src/app/tab-group/tab-item/tab-item.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n@if(activeTabIndex === index){\r\n    <div class=\"tab-item\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n}\r\n";

/***/ }),

/***/ 7606:
/*!***********************************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\r\n  <h2>Enter a zipcode:</h2>\r\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\" (keyup.enter)=\"addLocation(zipcode.value)\">\r\n  <br>\r\n  <button class=\"btn btn-primary\" (click)=\"addLocation(zipcode.value)\">\r\n    Add location\r\n  </button>\r\n</div>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map