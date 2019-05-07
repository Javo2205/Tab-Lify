import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatatasPage } from './batatas.page';

describe('BatatasPage', () => {
  let component: BatatasPage;
  let fixture: ComponentFixture<BatatasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatatasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatatasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
