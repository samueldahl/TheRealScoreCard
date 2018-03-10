import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { AngularFirestore, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CourseServiceService } from './course-service.service';

@Injectable()
export class FirebaseService {
  private itemDoc: AngularFirestoreDocument<any>;
  private item: any;
  scores: any[] = [];
  constructor(db: AngularFirestore, courseService: CourseServiceService) {
    this.itemDoc = db.doc('jasonFaga/golf');
    this.itemDoc.valueChanges().subscribe((item) => {
      this.item = item;
      console.log(this.item);
    });
    console.log(this.itemDoc);
    courseService.course$.subscribe((course) => {
      this.itemDoc.update({
        courseId: course.id,
        courseSet: true,
        golfers: []
      });
    });
  }
  // scores argument example:
  /*
  {
    player: this.playerId,
    name: this.playerName,
    tee: this.teeType,
    scores: this.scoreArray
  }
  */
  saveScores(): void {
    this.itemDoc.update({
      golfers: this.scores
    });
  }
  setScores(scores): void {
    for (var i = 0; i < this.scores.length; i++) {
      if (this.scores[i].player == scores.player) {
        this.scores[i] = scores;
        this.saveScores();
        return;
      }
    }
    this.scores.push(scores);
    this.saveScores();
  }
  clearScores(): void {
    this.scores = [];
    this.saveScores();
  }
}
