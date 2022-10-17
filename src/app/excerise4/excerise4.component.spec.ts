import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Excerise4Component } from './excerise4.component';

describe('Excerise4Component', () => {
  let component: Excerise4Component;
  let fixture: ComponentFixture<Excerise4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Excerise4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Excerise4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
