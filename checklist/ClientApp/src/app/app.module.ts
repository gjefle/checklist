import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
import { ListEditComponent } from './list-edit/list-edit.component';

@NgModule({
    declarations: [AppComponent, ChecklistInfoComponent, HomeComponent, ListEditComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,

        FlexLayoutModule,

        MatCardModule,
        MatToolbarModule,

        RouterModule.forRoot([
            { path: '', component: HomeComponent }

            // { path: 'counter', component: CounterComponent },
            // { path: 'fetch-data', component: FetchDataComponent }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
