import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AppComponent } from './app.component';

// Angular material and flex layout
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// NGX-bootstrap
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ChecklistInfoComponent } from './checklist-info/checklist-info.component';
import { HomeComponent } from './home/home.component';
import { ListCheckComponent } from './list-check/list-check.component';
import { DataService } from './services/data.service';
import { StateComponent } from './state/state.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
    declarations: [AppComponent, ChecklistInfoComponent, HomeComponent, ListCheckComponent, StateComponent, ListEditComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule,

        FlexLayoutModule,
        ButtonsModule.forRoot(),
        ProgressbarModule.forRoot(),
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,

        RouterModule.forRoot([
            { path: '', redirectTo: 'checklists', pathMatch: 'full' },
            { path: 'checklists', component: HomeComponent },
            { path: 'checklists/check/:id', component: ListCheckComponent },            
            { path: 'checklists/edit/:id', component: ListEditComponent },
            { path: 'checklists/add', component: ListEditComponent }


            // { path: 'counter', component: CounterComponent },
            // { path: 'fetch-data', component: FetchDataComponent }
        ])
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {}
