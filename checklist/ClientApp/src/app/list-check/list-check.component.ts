import { Component, OnInit } from '@angular/core';
import { Checklist } from '../models/checklist';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChecklistItem } from '../models/checklist-item';

@Component({
    selector: 'app-list-check',
    templateUrl: './list-check.component.html',
    styleUrls: ['./list-check.component.scss']
})
export class ListCheckComponent implements OnInit {
    checklist: Checklist;
    routeSub: Subscription;
    constructor(
        private activateRoute: ActivatedRoute,
        private dataService: DataService
    ) {}

    ngOnInit() {
        this.routeSub = this.activateRoute.params.subscribe(this.getSite);
    }

    onStateChange(event, item: ChecklistItem) {
        item.state = event;
        this.dataService.setState(item, event);
    }

    itemStyle(item: ChecklistItem) {
        let color = 'inherit';
        if (item.state === 'checked') {
            color = 'rgba(40,167,69, 0.3)';
        } else if (item.state === 'notOk') {
            color = 'rgba(220,53,69, 0.3)';
        }
        return {
            'background-color': color
        };
    }

    private getSite = params => {
        const id = params['id'];
        this.checklist = this.dataService.getCheckList(id);
    };
}
