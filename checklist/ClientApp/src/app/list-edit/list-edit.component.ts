import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Checklist } from '../models/checklist';

@Component({
    selector: 'app-list-edit',
    templateUrl: './list-edit.component.html',
    styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit {
    @Input() checklist: Checklist;
    checklistForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService
    ) {}

    ngOnInit() {
        if (this.checklist) {
            this.checklistForm = this.formBuilder.group({
                name: ''                
            });
        } else {
            this.checklist = {
                checklistId: 0,
                name: '',
                outputCheckItems: []
            };
            this.checklistForm = this.formBuilder.group({
                name: this.checklist.name
            });
        }

        this.checklistForm.valueChanges.subscribe(this.onFormChange);
    }
    save() {
        this.checklist.name = this.checklistForm.value.name as string;
        this.dataService.addOrEditChecklist(this.checklist);
    }

    onFormChange = val => {};
}
