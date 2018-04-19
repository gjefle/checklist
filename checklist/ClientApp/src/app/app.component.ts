import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    constructor(private dataService: DataService, private router: Router) {}
    get listCount(): number {
        return this.dataService.checklists ? this.dataService.checklists.length : 0;
    }
    get checkCount(): number {
        let count = 0;
        if (this.dataService.checklists) {
            this.dataService.checklists.forEach(list => {
                if (list.outputCheckItems) {
                    list.outputCheckItems.forEach(item => {
                        if (item.state && item.state !== 'unchecked') {
                            count++;
                        }
                    });
                }
            });
        }
        return count;
    }

    get checkTotal(): number {
        let count = 0;
        if (this.dataService.checklists) {
            this.dataService.checklists.forEach(list => {
                count += list.outputCheckItems.length;
            });
        }
        return count;
    }

    navigateToHome() {
        this.router.navigate(['checklists']);
    }
}
