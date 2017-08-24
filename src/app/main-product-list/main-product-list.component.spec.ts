/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainProductListComponent } from './main-product-list.component';

describe('MainProductListComponent', () => {
  let component: MainProductListComponent;
  let fixture: ComponentFixture<MainProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
