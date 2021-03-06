import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { Checklist } from '../models/checklist';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-checklist-info',
  templateUrl: './checklist-info.component.html'
})
export class ChecklistInfoComponent implements OnInit {
  @Input() checklist: Checklist;
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {}

  get itemLength() {
    let length = 0;
    if (this.checklist && this.checklist.outputCheckItems) {
      length = this.checklist.outputCheckItems.length;
    }
    return length;
  }

  open() {
    this.router.navigate([`checklists/check/${this.checklist.checklistId}`]);
  }

  delete() {
      this.dataService.deleteChecklist(this.checklist);
  }

  edit() {}
}
