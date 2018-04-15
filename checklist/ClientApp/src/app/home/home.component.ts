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
}
