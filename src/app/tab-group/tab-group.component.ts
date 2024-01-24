import { CommonModule } from '@angular/common';
import { TabItemComponent } from './tab-item/tab-item.component';
import { Component, Input, TemplateRef } from "@angular/core";

@Component({
    selector: 'app-tab-group',
    templateUrl: 'tab-group.component.html',
    styleUrls: ['tab-group.component.css'],
    imports: [TabItemComponent, CommonModule],
    standalone: true,
})
export class TabGroupComponent<T>{
    /** @param tabNames - Array of strings, contains the list of names for the tabs*/
    @Input() tabNames: string[] = [];
    /** @param tabContents - Array of objects of type T, contains the contents for tabs */
    @Input() tabContents: T[] = [];
    /** @param closeTabFn - optional side effect function when user closes a tab */
    @Input() closeTabFn: (...args: any[])=>void;
    /** @param contentTemplate - Template reference to be used to show the contents of the tab */
    @Input() contentTemplate: TemplateRef<{ $implicit: T }>;

    activeTabIndex: number = 0;

    onCloseTab(i: number){
        if(this.closeTabFn !== undefined) this.closeTabFn(i);
        this.onSelectTab(i-1);
    }

    onSelectTab(i: number): void{
        this.activeTabIndex = i;
    }
}