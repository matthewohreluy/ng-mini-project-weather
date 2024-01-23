import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-tab-item',
    templateUrl: 'tab-item.component.html',
    styleUrls: ['tab-item.component.css'],
    standalone: true 
})
export class TabItemComponent{
    @Input() index: number;
    @Input() activeTabIndex: number;
}