import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MpProfileComponent } from './mp-profile/mp-profile.component';
import { MpmashComponent } from './mpmash/mpmash.component';
import { MpmashScoreboardComponent } from './mpmash-scoreboard/mpmash-scoreboard.component';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MpProfileComponent,
    MpmashComponent,
    MpmashScoreboardComponent
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
