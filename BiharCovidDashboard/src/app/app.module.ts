import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDashboardComponent } from './Dashboard/dashboard.component';
import { HeaderComponent } from './Dashboard/header/header.component';

@NgModule({
  declarations: [
    AppComponent ,
    MyDashboardComponent,
    HeaderComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
