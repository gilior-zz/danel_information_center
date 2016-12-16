import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import {GoogleChart, GridDirective, HideContentDirective, GoogleRecaptchaDirective, LocationPrinterDirective, HoverScaleDirective} from './directives.barrel'

//import {AgGridModule} from 'ag-grid-ng2/main';

@NgModule({
    imports: [],
    declarations: [GoogleChart, GridDirective, HideContentDirective, GoogleRecaptchaDirective, LocationPrinterDirective, HoverScaleDirective],
    exports: [
        CommonModule, FormsModule, GoogleChart, GridDirective, HideContentDirective, GoogleRecaptchaDirective, LocationPrinterDirective, HoverScaleDirective]
})
export class SharedModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/