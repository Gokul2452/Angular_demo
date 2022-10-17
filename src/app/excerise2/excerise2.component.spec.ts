import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Excerise2Component } from './excerise2.component';

describe('Excerise2Component', () => {
  let component: Excerise2Component;
  let fixture: ComponentFixture<Excerise2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Excerise2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Excerise2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
