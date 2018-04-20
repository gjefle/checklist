import { Injectable } from '@angular/core';
import { ChecklistItem } from '../models/checklist-item';
import { Checklist } from '../models/checklist';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DataService {
    checklists: Checklist[];
    obs: Observable<any>;
    constructor(private httpClient: HttpClient) {
        this.obs = new Observable();
        this.getChecklists().subscribe((res: Checklist[]) => {
            this.checklists = res;
        });
    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    getCheckList(id: number): Checklist {
        if (this.checklists) {
            return this.checklists.find(c => c.checklistId == id);
        }
        return null;
    }

    setState(item: ChecklistItem, state: string, checklist: Checklist) {
        let url = 'api/checklist';
        return this.httpClient.post<Checklist>(
            url,
            checklist,
            this.httpOptions
        ).subscribe();
        //.pipe(tap(res => console.log(res)), catchError(null));
    }


    private getChecklists(): Observable<Checklist[]> {
        return this.obs = this.httpClient.get<Checklist[]>('api/checklist');

        // let c1 = new Checklist();
        // c1.name = 'End switches';
        // c1.checklistId = 1;
        // c1.checklistItems = [
        //     new ChecklistItem(),
        //     new ChecklistItem(),
        //     new ChecklistItem(),
        //     new ChecklistItem(),
        //     new ChecklistItem(),
        //     new ChecklistItem(),
        //     new ChecklistItem(),
        //     new ChecklistItem(),
        //     new ChecklistItem()
        // ];
        // c1.checklistItems[0].name = 'End switch 1';
        // c1.checklistItems[0].state = 'checked';
        // c1.checklistItems[1].name = 'End switch 2';
        // c1.checklistItems[1].state = 'unchecked';
        // c1.checklistItems[2].name = 'End switch 3';
        // c1.checklistItems[3].name = 'End switch 4';
        // c1.checklistItems[4].name = 'End switch 5';
        // c1.checklistItems[5].name = 'End switch 6';
        // c1.checklistItems[6].name = 'End switch 7';
        // c1.checklistItems[7].name = 'End switch 8';
        // c1.checklistItems[8].name = 'End switch 9';
        // let c2 = new Checklist();
        // c2.checklistId = 2;
        // c2.checklistItems = [
        //     new ChecklistItem(),
        //     new ChecklistItem(),
        //     new ChecklistItem()
        // ];
        // c2.name = 'Connect devices';
        // let c3 = new Checklist();
        // c3.checklistId = 3;
        // c3.checklistItems = [
        //     new ChecklistItem(),
        //     new ChecklistItem(),
        //     new ChecklistItem()
        // ];
        // c3.name = 'Motor inputs';
        // let c4 = new Checklist();
        // c3.checklistId = 4;
        // c4.name = 'Motor outputs';
        // c4.checklistItems = [
        //     new ChecklistItem(),
        //     new ChecklistItem(),
        //     new ChecklistItem(),
        //     new ChecklistItem(),
        //     new ChecklistItem(),
        //     new ChecklistItem()
        // ];
        // return (this.checklists = [c1, c2, c3, c4]);
    }
}
