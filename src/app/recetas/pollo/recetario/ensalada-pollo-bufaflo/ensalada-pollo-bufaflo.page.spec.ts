import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsaladaPolloBufafloPage } from './ensalada-pollo-bufaflo.page';

describe('EnsaladaPolloBufafloPage', () => {
  let component: EnsaladaPolloBufafloPage;
  let fixture: ComponentFixture<EnsaladaPolloBufafloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsaladaPolloBufafloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsaladaPolloBufafloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
