"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var services_barrel_1 = require('./services.barrel');
var Subject_1 = require('rxjs/Subject');
var SummaryValuesService = (function () {
    function SummaryValuesService(pn, as) {
        var _this = this;
        this.pn = pn;
        this.as = as;
        this.summaryValuesSubject = new Subject_1.Subject();
        this.summaryValues$ = this.summaryValuesSubject.asObservable();
        this.subscription1 = this.pn.pageNameEvent$.subscribe(function () { _this.onNavigation(); _this.fireSummaryValuesChanged(); });
        this.subscription2 = this.as.account$.subscribe(function () { return _this.onAccountChanged(); });
        this.updateAccountValues();
        this.updateSummaryValues();
    }
    SummaryValuesService.prototype.onAccountChanged = function () {
        this.updateAccountValues();
        this.updateSummaryValues();
    };
    SummaryValuesService.prototype.updateSummaryValues = function () {
        this.transactionsSummaryValues = { BuysFromYearStart: this.as.Account.ID || 999, SalesFromYearStart: this.as.Account.ID || 999, TaxFromYearStart: this.as.Account.ID || 999 };
        this.performanceSummaryValues = { PortfolioAmount: this.as.Account.ID || 999, PerformanceFromYearStart: this.as.Account.ID || 999, Performancelast12Month: this.as.Account.ID || 999, Performancelast36Month: this.as.Account.ID || 999 };
    };
    SummaryValuesService.prototype.updateAccountValues = function () {
        this.accountProperties = { Bank: "Bank " + (this.as.Account.ID || 999), Name: "Name " + (this.as.Account.ID || 999), Policy: "Policy " + (this.as.Account.ID || 999), ID: 999 };
    };
    SummaryValuesService.prototype.fireSummaryValuesChanged = function () {
        this.summaryValuesSubject.next();
    };
    SummaryValuesService.prototype.onNavigation = function () {
        //this.updateSummaryValues();
    };
    SummaryValuesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [services_barrel_1.pageNameService, services_barrel_1.AccountService])
    ], SummaryValuesService);
    return SummaryValuesService;
}());
exports.SummaryValuesService = SummaryValuesService;
//# sourceMappingURL=summary-values.service.js.map