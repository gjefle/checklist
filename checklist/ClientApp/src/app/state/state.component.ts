import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ChecklistItem } from '../models/checklist-item';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
    selector: 'app-state',
    templateUrl: './state.component.html',
    styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
    @Input() item: ChecklistItem;
    @Output() stateChange = new EventEmitter<string>();
    stateForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private dataService: DataService) {}

    ngOnInit() {
        this.stateForm = this.formBuilder.group({
            state: this.item.state ? this.item.state : 'unchecked'
        });
        this.stateForm.valueChanges.subscribe(this.onStateChange);
    }

    onStateChange = (event: any) => {

        this.item.state = event.state ? event.state : 'unchecked';
        //this.stateChange.emit(state);
    };
}
