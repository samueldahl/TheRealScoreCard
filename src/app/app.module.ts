import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CourseSelectorComponent } from './course-selector/course-selector.component';
import { GetCoursesService } from './get-courses.service';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { ScorecardDirective } from './scorecard.directive';
import { NameListService } from './name-list.service';
import { CheckNamePipe } from './check-name.pipe';
import { CourseServiceService } from './course-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ScorePageComponent,
    WelcomePageComponent,
    CourseSelectorComponent,
    ScorecardComponent,
    ScorecardDirective,
    CheckNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetCoursesService, NameListService, CourseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
