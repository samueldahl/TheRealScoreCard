import { Directive, ViewContainerRef } from '@angular/core';

@Directive ({
  selector: '[scorecard]'
})

export class ScorecardDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
