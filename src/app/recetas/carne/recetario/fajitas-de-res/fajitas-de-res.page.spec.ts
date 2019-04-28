import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FajitasDeResPage } from './fajitas-de-res.page';

describe('FajitasDeResPage', () => {
  let component: FajitasDeResPage;
  let fixture: ComponentFixture<FajitasDeResPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FajitasDeResPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FajitasDeResPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
