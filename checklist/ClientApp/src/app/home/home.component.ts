import { Component, OnInit } from '@angular/core';
import { Checklist } from '../models/checklist';
import { ChecklistItem } from '../models/checklist-item';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    checklists: Checklist[];
    constructor() {}

    ngOnInit() {
        this.getChecklists();
    }

    getChecklists() {
        let c1 = new Checklist();
        c1.name = 'Test all end switches';
        c1.checklistItems = [
            new ChecklistItem(),
            new ChecklistItem(),
            new ChecklistItem(),
            new ChecklistItem(),
            new ChecklistItem(),
            new ChecklistItem(),
            new ChecklistItem(),
            new ChecklistItem(),
            new ChecklistItem()
        ];
        let c2 = new Checklist();
        c2.checklistItems = [
            new ChecklistItem(),
            new ChecklistItem(),
            new ChecklistItem()
        ];
        c2.name = 'Connect devices';
        let c3 = new Checklist();
        c3.checklistItems = [
            new ChecklistItem(),
            new ChecklistItem(),
            new ChecklistItem()
        ];
        c3.name = 'Motor inputs';
        let c4 = new Checklist();
        c4.name = 'Motor outputs';
        c4.checklistItems = [
            new ChecklistItem(),
            new ChecklistItem(),
            new ChecklistItem(),
            new ChecklistItem(),
            new ChecklistItem(),
            new ChecklistItem()
        ];
        return (this.checklists = [c1, c2, c3, c4]);
    }

    add() {
        // TODO: implement
    }
}
