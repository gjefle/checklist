import { Component, OnInit } from '@angular/core';
import { Checklist } from '../models/checklist';
import { ChecklistItem } from '../models/checklist-item';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
    constructor(private dataService: DataService, private router: Router) {}

    ngOnInit() {
        
    }

   get checklists(): Checklist[] {
       return this.dataService.checklists;
   }

    add() {
        this.router.navigate(['checklists/add']);
    }


  itemLength(checklist: Checklist) {
    let length = 0;
    if (checklist && checklist.outputCheckItems) {
      length = checklist.outputCheckItems.length;
    }
    return length;
  }

  open(checklist: Checklist) {
    this.router.navigate([`checklists/check/${checklist.checklistId}`]);
  }

  delete(checklist: Checklist) {
      this.dataService.deleteChecklist(checklist);
  }

  edit(checklist: Checklist) {
    this.router.navigate([`checklists/edit/${checklist.checklistId}`]);
  }
}
