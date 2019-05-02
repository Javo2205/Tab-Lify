import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LasanaPage } from './lasana.page';

describe('LasanaPage', () => {
  let component: LasanaPage;
  let fixture: ComponentFixture<LasanaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LasanaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LasanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
