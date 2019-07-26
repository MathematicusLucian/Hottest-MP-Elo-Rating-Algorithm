import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MpProfileComponent } from './mp-profile/mp-profile.component';
import { MpmashComponent } from './mpmash/mpmash.component';
import { MpmashScoreboardComponent } from './mpmash-scoreboard/mpmash-scoreboard.component';
import { BrexitPositionScoreboardComponent } from './brexit-position-scoreboard/brexit-position-scoreboard.component';
import { MpExpensesScoreboardComponent } from './mp-expenses-scoreboard/mp-expenses-scoreboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mp/profile/:id', component: MpProfileComponent }, 
  { path: 'mp/mash', component: MpmashComponent  }, 
  { path: 'mp/mash/scores', component: MpmashScoreboardComponent }, 
  { path: 'mp/brexit-positions', component: BrexitPositionScoreboardComponent }, 
  { path: 'mp/expenses-scores', component: MpExpensesScoreboardComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
