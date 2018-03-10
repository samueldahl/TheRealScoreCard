import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScorecardComponent } from '../scorecard/scorecard.component'
import { ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ScorecardDirective } from '../scorecard.directive';
import { NameListService } from '../name-list.service';
import { CourseServiceService } from '../course-service.service';
import { GetCoursesService } from '../get-courses.service';
import { FirebaseService } from '../firebase.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css'],
  entryComponents: [
    ScorecardComponent
  ]
})

export class ScorePageComponent implements OnInit, AfterViewInit {

  @ViewChild(ScorecardDirective) scorecardHost: ScorecardDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private nameList: NameListService,
              private courseService: CourseServiceService,
              private firebaseService: FirebaseService,
              private getCoursesService: GetCoursesService) { }
  playerId: number = 0;
  playerName: string = '';
  teeType: number;
  defaultScores: number[];

  validateInputs(): boolean {
    if (this.courseService.course === undefined || isNaN(this.teeType)) {
      return false;
    }
    if (/\S/g.exec(this.playerName) === null) {
      return false;
    }
    return true;
  }

  addPlayer(playerName: string, teeType: number, scores: number[], overrideInputs: boolean): void {
    if (!overrideInputs && !this.validateInputs()) return;
    this.nameList.addName(playerName);
    // loads component into factory variable
    var factory = this.componentFactoryResolver.resolveComponentFactory(ScorecardComponent);
    // reference points to <ng-template scorecard>
    var reference = this.scorecardHost.viewContainerRef;
    // adds loaded component into referenced HTML, card becomes reference to live HTML version
    var card = reference.createComponent(factory);
    // sets playerId variable of live HTML version to our playerId and adds one for the next time this function is called
    var cardInstance = <ScorecardComponent>card.instance;
    cardInstance.playerId = this.playerId++;
    cardInstance.playerName = playerName;
    cardInstance.holes = this.courseService.course.holes;
    cardInstance.scoreArray = scores;
    cardInstance.teeType = teeType;
    cardInstance.afterValuesFilled();
    cardInstance.totalYardage = this.courseService.course.tee_types[teeType].yards;
    cardInstance.totalPar = this.courseService.course.tee_types[teeType].par;
    console.log(cardInstance);

    this.playerName = '';
  }

  clearCards(): void {
    this.scorecardHost.viewContainerRef.clear();
    this.playerId = 0;
  }

  firebaseSub: Subscription;

  ngOnInit() {}
  ngAfterViewInit() {
    this.courseService.onCourseChange().subscribe((course) => {
      this.clearCards();
      this.defaultScores = [];
      for (let hole of course.holes) {
        this.defaultScores.push(0);
      }
    });
    this.firebaseSub = this.firebaseService.item$.subscribe((item) => {
      this.firebaseSub.unsubscribe();
      console.log(item);
      if (!item.courseSet) return;
      this.getCoursesService.getCourseInfo(item.courseId).subscribe(course => {
        this.courseService.setCourse(course.course);
        for (let golfer of item.golfers) {
          console.log(golfer);
          this.addPlayer(golfer.name, golfer.tee, golfer.scores, true);
        }
      });
    });
  }

}
