/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BestsellerComponent } from './bestseller.component';

describe('BestsellerComponent', () => {
  let component: BestsellerComponent;
  let fixture: ComponentFixture<BestsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
