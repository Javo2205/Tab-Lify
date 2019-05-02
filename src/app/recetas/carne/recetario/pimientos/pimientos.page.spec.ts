import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PimientosPage } from './pimientos.page';

describe('PimientosPage', () => {
  let component: PimientosPage;
  let fixture: ComponentFixture<PimientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PimientosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PimientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
