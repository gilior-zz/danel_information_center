import {Injectable} from '@angular/core'
import {pageNameService, AccountService} from './services.barrel'

import {AccountProperties, PerformanceSummaryValues, TransactionsSummaryValues} from './models'
import { Subscription }   from 'rxjs/Subscription';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class SummaryValuesService {
    private summaryValuesSubject = new Subject();
    summaryValues$ = this.summaryValuesSubject.asObservable();

    public accountProperties: AccountProperties;
    public performanceSummaryValues: PerformanceSummaryValues;
    public transactionsSummaryValues: TransactionsSummaryValues;
    private subscription1: Subscription;
    private subscription2: Subscription;
    constructor(public pn: pageNameService, public as: AccountService) {
        this.subscription1 = this.pn.pageNameEvent$.subscribe(
            () => { this.onNavigation(); this.fireSummaryValuesChanged() });
        this.subscription2 = this.as.account$.subscribe(
            () => this.onAccountChanged());
        this.updateAccountValues();
        this.updateSummaryValues();


    }
    onAccountChanged() {
        this.updateAccountValues();
        this.updateSummaryValues();
    }

    updateSummaryValues() {
        this.transactionsSummaryValues = { BuysFromYearStart: this.as.Account.ID || 999, SalesFromYearStart: this.as.Account.ID || 999, TaxFromYearStart: this.as.Account.ID || 999 };
        this.performanceSummaryValues = { PortfolioAmount: this.as.Account.ID || 999, PerformanceFromYearStart: this.as.Account.ID || 999, Performancelast12Month: this.as.Account.ID || 999, Performancelast36Month: this.as.Account.ID || 999 };
    }

    updateAccountValues() {

        this.accountProperties = { Bank: `Bank ${this.as.Account.ID || 999}`, Name: `Name ${this.as.Account.ID || 999}`, Policy: `Policy ${this.as.Account.ID || 999}`, ID: 999 }


    }

    fireSummaryValuesChanged() {
        this.summaryValuesSubject.next();
    }

    onNavigation() {
        //this.updateSummaryValues();



    }
}


