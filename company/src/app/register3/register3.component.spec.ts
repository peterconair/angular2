/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Register3Component } from './register3.component';

describe('Register3Component', () => {
  let component: Register3Component;
  let fixture: ComponentFixture<Register3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
