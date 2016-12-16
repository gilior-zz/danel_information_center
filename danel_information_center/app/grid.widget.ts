import { Component, Input, OnInit, HostBinding,
    trigger, transition, animate,
    style, state, TemplateRef, ViewContainerRef, ElementRef} from '@angular/core';
import {GridOptions, GridData} from './models'
@Component({
    selector: 'danel-grid',
    moduleId: module.id,
    templateUrl: './grid.widget.html',

})
export class GridWidgetComponent implements OnInit {

    constructor(
        private el: ElementRef
    ) {
        console.log(this.el.nativeElement.innerHtml);
    }
    @Input() public gridOptions: GridOptions;
    //@Input() public gridData: any;
    @Input() public gridData: GridData;
    @Input() public gridID: string;

    ngOnInit() {
        //console.log(this.gridData);
    }



}