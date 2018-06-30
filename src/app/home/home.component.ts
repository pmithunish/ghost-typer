import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  FormControl,
  Validators
} from '@angular/forms';

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
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  typings: Array<string> = [];
  viewStrings: Array<string> = [];
  form = new FormGroup({
    typestring: new FormControl({ value: '', disabled: false }, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(100)
    ])
  });

  get formValid() {
    return this.form.status;
  }

  get typestring() {
    const typestring = this.form.get('typestring');
    return {
      length: typestring.value ? typestring.value.length : 0,
      required:
        typestring.touched &&
        typestring.invalid &&
        typestring.getError('required'),
      minlength: typestring.getError('minlength'),
      maxlength: typestring.getError('maxlength')
    };
  }

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

  addString() {
    const form = this.form.value;
    this.typings.push(form.typestring + form.typestring);
    this.viewStrings.push(form.typestring);
    this.form.reset();
    this.formGroupDirective.resetForm();
    if (this.typings.length >= 5) {
      this.form.get('typestring').disable();
    }
  }

  clearStrings() {
    this.typings = [];
    this.viewStrings = [];
    this.form.get('typestring').enable();
    this.form.reset();
    this.formGroupDirective.resetForm();
  }
}
