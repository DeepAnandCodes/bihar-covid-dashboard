import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDashboardComponent } from './Dashboard/dashboard.component';
import { HeaderComponent } from './Dashboard/header/header.component';
import { ConfirmedCasesComponent } from './Dashboard/confirmed-cases/confirmed-cases.component';
import { ActiveCasesComponent } from './Dashboard/active-cases/active-cases.component';
import { RecoveredCasesComponent } from './Dashboard/recovered-cases/recovered-cases.component';
import { DeceasedCasesComponent } from './Dashboard/deceased-cases/deceased-cases.component';

@NgModule({
  declarations: [
    AppComponent ,
    MyDashboardComponent,
    HeaderComponent,
    ConfirmedCasesComponent,
    ActiveCasesComponent,
    RecoveredCasesComponent,
    DeceasedCasesComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
