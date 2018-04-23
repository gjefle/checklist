import { Injectable } from '@angular/core';
import { ChecklistItem } from '../models/checklist-item';
import { Checklist } from '../models/checklist';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class DataService {
    checklists: Checklist[];
    obs: Observable<any>;
    constructor(private httpClient: HttpClient) {
        this.obs = new Observable();
        this.loadLists();
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

    deleteChecklist(checklist: Checklist) {
        this.httpClient
            .delete(`api/checklist/${checklist.checklistId}`, this.httpOptions)
            .subscribe(() => this.removeChecklist(checklist));
    }

    removeChecklist(checklist: Checklist) {
        this.checklists = this.checklists.filter(
            c => c.checklistId !== checklist.checklistId
        );
    }

    setState(item: ChecklistItem, state: string, checklist: Checklist) {
        let url = 'api/checklist';
        return this.httpClient
            .post<Checklist>(url, checklist, this.httpOptions)
            .subscribe();
        //.pipe(tap(res => console.log(res)), catchError(null));
    }

    addOrEditChecklist(checklist: Checklist) {
        let url = 'api/checklist';
        return this.httpClient
            .post<Checklist>(url, checklist, this.httpOptions)
            .subscribe(this.loadLists);
    }
    private loadLists = () => {
        this.getChecklists().subscribe(res => {
            this.checklists = res;
        });
    }
    getChecklists = (): Observable<Checklist[]> => {
        return (this.obs = this.httpClient.get<Checklist[]>('api/checklist'));
    }
}
