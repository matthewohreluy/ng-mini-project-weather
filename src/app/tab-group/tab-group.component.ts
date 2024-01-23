import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-tab-group',
    templateUrl: 'tab-group.component.html',
    styleUrls: ['tab-group.component.css'],
    standalone: true,
})
export class TabGroupComponent{
    @Input() tabs: string[] = [];
    @Output() closeTab = new EventEmitter<number | null>();
    @Input() activeTabIndex: number = 0;
    @Output() activeTabIndexChange: EventEmitter<number> = new EventEmitter<number>();

    onCloseTab(i){
        this.closeTab.emit(i);
    }

    onSelectTab(i: number): void{
        this.activeTabIndex = i;
        this.activeTabIndexChange.emit(this.activeTabIndex);
    }
}