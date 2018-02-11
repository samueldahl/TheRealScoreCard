import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AddPanelComponent } from './add-panel/add-panel.component';
import { GetCoursesService } from './get-courses.service';


@NgModule({
  declarations: [
    AppComponent,
    ScoreCardComponent,
    WelcomePageComponent,
    AddPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetCoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
