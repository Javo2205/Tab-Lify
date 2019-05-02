import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaPage } from './pasta.page';

describe('PastaPage', () => {
  let component: PastaPage;
  let fixture: ComponentFixture<PastaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
