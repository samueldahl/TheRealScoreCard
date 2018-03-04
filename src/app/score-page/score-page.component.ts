import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScorecardComponent } from '../scorecard/scorecard.component'
import { ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ScorecardDirective } from '../scorecard.directive';
import { NameListService } from '../name-list.service';
import { CourseServiceService } from '../course-service.service';

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
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private nameList: NameListService, private courseService: CourseServiceService) { }
  playerId: number = 0;
  playerName: string = '';
  teeType: number;

  validateInputs(): boolean {
    if (this.courseService.course === undefined || isNaN(this.teeType)) {
      return false;
    }
    //weird whitespace stuff curtosy of Jay Dee Phlem
    if (/\S/g.exec(this.playerName) === null) {
      return false;
    }
    return true;
  }

  addPlayer(): void {
    if (!this.validateInputs()) return;
    this.nameList.addName(this.playerName);
    // loads component into factory variable
    var factory = this.componentFactoryResolver.resolveComponentFactory(ScorecardComponent);
    // reference points to <ng-template scorecard>
    var reference = this.scorecardHost.viewContainerRef;
    // adds loaded component into referenced HTML, card becomes reference to live HTML version
    var card = reference.createComponent(factory);
    // sets playerId variable of live HTML version to our playerId and adds one for the next time this function is called
    var cardInstance = <ScorecardComponent>card.instance;
    cardInstance.playerId = this.playerId++;
    cardInstance.playerName = this.playerName;
    cardInstance.holes = this.courseService.course.holes;
    cardInstance.teeType = this.teeType;
    cardInstance.afterValuesFilled();

    cardInstance.totalYardage = this.courseService.course.tee_types[this.teeType].yards;
    cardInstance.totalPar = this.courseService.course.tee_types[this.teeType].par;
    console.log(cardInstance);

    this.playerName = '';
  }

  clearCards(): void {
    this.scorecardHost.viewContainerRef.clear();
    this.playerId = 0;
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.courseService.onCourseChange().subscribe((course) => {
      this.clearCards();
    });
  }

}
