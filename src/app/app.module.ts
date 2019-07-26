import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MpProfileComponent } from './mp-profile/mp-profile.component';
import { MpmashComponent } from './mpmash/mpmash.component';
import { MpmashScoreboardComponent } from './mpmash-scoreboard/mpmash-scoreboard.component';
import { BrexitPositionScoreboardComponent } from './brexit-position-scoreboard/brexit-position-scoreboard.component';
import { MpExpensesScoreboardComponent } from './mp-expenses-scoreboard/mp-expenses-scoreboard.component';

import { MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule, 
  MatIconModule,
  MatSelectModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollComponent } from './poll/poll.component';
import { PollResultsComponent } from './poll-results/poll-results.component';
import { D3mapComponent } from './d3map/d3map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MpProfileComponent,
    MpmashComponent,
    MpmashScoreboardComponent,
    BrexitPositionScoreboardComponent,
    MpExpensesScoreboardComponent,
    PollComponent,
    PollResultsComponent,
    D3mapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    HttpClientJsonpModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule, 
    MatSelectModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
