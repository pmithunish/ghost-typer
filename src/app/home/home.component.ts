import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {
  trigger,
  query,
  style,
  transition,
  stagger,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('page-animation', [
      transition(':enter', [
        query(
          '.mat-card',
          style({ opacity: 0, transform: 'translateY(-200px)' })
        ),
        query('.mat-card', [
          stagger(100, [
            animate(
              '500ms cubic-bezier(.56,.1,.53,1.33)',
              style({ opacity: 1, transform: '*' })
            )
          ])
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    typestring: new FormControl()
  });
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
