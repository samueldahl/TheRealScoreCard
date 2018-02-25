import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'
import { ScorePageComponent } from './score-page/score-page.component';

const routes: Routes = [
  { path: 'scorecard', component: ScorePageComponent },
  { path: '', component: WelcomePageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
