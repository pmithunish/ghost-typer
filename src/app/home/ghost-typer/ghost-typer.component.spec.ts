/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GhostTyperComponent } from './ghost-typer.component';

describe('GhostTyperComponent', () => {
  let component: GhostTyperComponent;
  let fixture: ComponentFixture<GhostTyperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostTyperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostTyperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
