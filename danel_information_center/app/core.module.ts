import {
    ModuleWithProviders, NgModule }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import {pageNameService, SummaryValuesService, AccountService, ParameterService, PerformanceDataService, TransactiosDataService, UserService,AdvisorService} from './services.barrel'
import {HoldingsDataService} from './holdings-data.service'
@NgModule({
    providers: [AccountService, pageNameService, SummaryValuesService, ParameterService, HoldingsDataService, PerformanceDataService, TransactiosDataService, UserService,AdvisorService]
})
export class CoreModule {
}
