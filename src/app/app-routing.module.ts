import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'
import { ScoreCardComponent } from './score-card/score-card.component';

const routes: Routes = [
  { path: 'scorecard', component: ScoreCardComponent },
  { path: '', component: WelcomePageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
