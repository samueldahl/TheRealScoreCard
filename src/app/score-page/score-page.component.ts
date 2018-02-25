import { Component, OnInit } from '@angular/core';
import { ScorecardComponent } from '../scorecard/scorecard.component'
import { ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ScorecardDirective } from '../scorecard.directive'

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css'],
  entryComponents: [
    ScorecardComponent
  ]
})

export class ScorePageComponent implements OnInit {

  @ViewChild(ScorecardDirective) scorecardHost: ScorecardDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  addPlayer() {
    var factory = this.componentFactoryResolver.resolveComponentFactory(ScorecardComponent);
    var reference = this.scorecardHost.viewContainerRef;
    reference.createComponent(factory);
  }

  ngOnInit() {}

}
