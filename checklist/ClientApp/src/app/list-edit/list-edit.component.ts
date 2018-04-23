import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Checklist } from '../models/checklist';
import { ChecklistItem } from '../models/checklist-item';
import { OutputCheckItem } from '../models/output-check-item';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-list-edit',
    templateUrl: './list-edit.component.html',
    styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit {
    checklist: Checklist;
    checklistForm: FormGroup;
    editIndex = -1;
    id: number;
    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.subscribe(this.getChecklist);
    }
    get itemsForm(): FormArray {
        return this.checklistForm.get('outputCheckItems') as FormArray;
    }

    getChecklist = (params) => {
        this.id = Number(params['id']);
        if(this.id) {
            this.dataService.getChecklists().subscribe(res =>  {
                this.checklist = this.dataService.getCheckList(this.id);
                this.initForm();
            });
        }
        else {
            this.initForm();
        }
    }
    initForm = () => {
        if (this.checklist) {
            let itemArray = [];
            this.checklist.outputCheckItems.forEach(i => {
                let item = {
                    description: i.description,
                    ipAddress: i.ipAddress,
                    number: i.number
                };
                itemArray.push(this.formBuilder.group(item));
            });
            this.checklistForm = this.formBuilder.group({
                name: this.checklist.name,
                type: 'output',
                outputCheckItems: this.formBuilder.array(itemArray)
            });
        } else {
            this.checklist = {
                checklistId: 0,
                name: '',
                outputCheckItems: []
            };
            this.checklistForm = this.formBuilder.group({
                name: '',
                type: 'output',
                outputCheckItems: this.formBuilder.array([])
            });
        }

        this.checklistForm.valueChanges.subscribe(this.onFormChange);
    }
    removeItem(itemControl: FormControl) {
        this.itemsForm.removeAt(this.itemsForm.controls.indexOf(itemControl));
    }

    addItem() {
    
        let item = {
            description: '',
            ipAddress: '127.1.1.2',
            number: 0
        };
        this.itemsForm.push(this.formBuilder.group(item));
        //this.checklist.outputCheckItems.push(item);
        this.editIndex = this.checklist.outputCheckItems.length - 1;
    }

    confirmEdit() {
        this.editIndex = -1;
    }

    save() {
        this.checklist.name = this.checklistForm.value.name as string;
        let items = [];
        this.itemsForm.controls.forEach(el => {
            let item: OutputCheckItem = {
                description: el.value.description,
                ipAddress: el.value.ipAddress,
                number: el.value.number,
                normallyHigh: false,
                state: 'unchecked',
                outputCheckItemId: 0,
                checklist: null
            };
            items.push(item);
        });
        this.checklist.outputCheckItems = items;
        this.dataService.addOrEditChecklist(this.checklist);
    }

    onFormChange = val => {};
}
