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
import { ScoreCountDirective } from './score-count.directive';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FirebaseService } from './firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    ScorePageComponent,
    WelcomePageComponent,
    CourseSelectorComponent,
    ScorecardComponent,
    ScorecardDirective,
    CheckNamePipe,
    ScoreCountDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'golfcard-22bbc'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [GetCoursesService, NameListService, CourseServiceService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
