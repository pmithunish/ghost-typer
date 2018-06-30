import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { interval, of, from, Observable, Subscription } from 'rxjs';
import {
  map,
  concatMap,
  scan,
  take,
  delay,
  finalize,
  takeWhile,
  takeUntil,
  mapTo
} from 'rxjs/operators';

const enum TypewriterConstants {
  CURSOR_BLINK_INTERVAL = 600,
  TYPING_AND_DELETING_INTERVAL = 200,
  MAX_DELAY_TYPING = 200,
  MAX_DELAY_AFTER_TYPING = 2000,
  MAX_DELAY_DELETING = 200
}
@Component({
  selector: 'app-ghost-typer',
  templateUrl: './ghost-typer.component.html',
  styleUrls: ['./ghost-typer.component.scss']
})
export class GhostTyperComponent implements OnInit, OnDestroy {
  @Input() typings: Array<string>;
  oldtypings = this.typings;
  typingSubscription: Subscription;
  innerSubscription: Subscription;
  result$: Observable<string>;
  cursor$: Observable<boolean>;
  iterableDiffer: any;
  result: string;

  constructor() {}

  ngOnInit() {
    if (this.typings === undefined || !this.typings.length) {
      setTimeout(() => this.typing(), 2000);
    }
    this.cursor$ = interval(TypewriterConstants.CURSOR_BLINK_INTERVAL).pipe(
      map(val => this.isEven(val))
    );
  }

  typing() {
    this.result$ = from(this.typings).pipe(
      concatMap(val => this.typewriter(val)),
      finalize(() => this.typing())
    );
  }

  typewriter(word: string) {
    return interval(TypewriterConstants.TYPING_AND_DELETING_INTERVAL).pipe(
      concatMap((val: number) => {
        if (val < word.length / 2) {
          return of(word[val]).pipe(
            delay(Math.random() * TypewriterConstants.MAX_DELAY_TYPING)
          );
        } else if (val === word.length / 2) {
          return of(word[val]).pipe(
            delay(TypewriterConstants.MAX_DELAY_AFTER_TYPING)
          );
        } else {
          return of(word[val]).pipe(
            delay(Math.random() * TypewriterConstants.MAX_DELAY_DELETING)
          );
        }
      }),
      scan((typed, currentLetter, index) => {
        if (index >= word.length / 2) {
          const typedArray = typed.split('');
          typedArray.pop();
          return typedArray.join('');
        } else {
          return typed + currentLetter;
        }
      }, ''),
      take(word.length)
    );
  }

  isEven(value: number) {
    return value % 2 === 0;
  }

  ngOnDestroy() {}
}
