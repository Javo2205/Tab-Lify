import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiliPage } from './chili.page';

describe('ChiliPage', () => {
  let component: ChiliPage;
  let fixture: ComponentFixture<ChiliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiliPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
