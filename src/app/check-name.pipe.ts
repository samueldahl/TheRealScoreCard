import { Pipe, PipeTransform } from '@angular/core';
import { NameListService } from './name-list.service';

@Pipe({ name: 'checkName' })

export class CheckNamePipe implements PipeTransform {
  constructor( private nameList: NameListService ) { }
  transform(origName: string): string {
    return this.nameList.checkName(origName);
  }
}
