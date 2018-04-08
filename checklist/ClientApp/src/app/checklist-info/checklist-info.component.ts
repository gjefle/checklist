import { Component, OnInit, Input } from '@angular/core';
import { Checklist } from '../models/checklist';

@Component({
  selector: 'app-checklist-info',
  templateUrl: './checklist-info.component.html'
})
export class ChecklistInfoComponent implements OnInit {
  @Input() checklist: Checklist;
  constructor() {}

  ngOnInit() {}

  get itemLength() {
    let length = 0;
    if (this.checklist && this.checklist.checklistItems) {
      length = this.checklist.checklistItems.length;
    }
    return length;
  }

  open() {}

  delete() {}

  edit() {}
}
