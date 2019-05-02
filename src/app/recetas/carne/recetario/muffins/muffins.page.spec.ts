import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuffinsPage } from './muffins.page';

describe('MuffinsPage', () => {
  let component: MuffinsPage;
  let fixture: ComponentFixture<MuffinsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuffinsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuffinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
