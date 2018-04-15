import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-list-edit',
    templateUrl: './list-edit.component.html',
    styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit {
    checklistForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService
    ) {}

    ngOnInit() {
        this.checklistForm = this.formBuilder.group({
            name: '',
            type: ''
        });
        this.checklistForm.valueChanges.subscribe(this.onFormChange);
    }

    onFormChange = val => {

    }
}
