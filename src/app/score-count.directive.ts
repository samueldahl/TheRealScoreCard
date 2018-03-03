import { Directive } from '@angular/core';

@Directive({
  selector: '[appScoreCount]',
  inputs:['score', 'element-name: input'],
  outputs:[]
})
export class ScoreCountDirective {
  constructor() { }

}
