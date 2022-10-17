import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Excerise1Component } from './excerise1.component';

describe('Excerise1Component', () => {
  let component: Excerise1Component;
  let fixture: ComponentFixture<Excerise1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Excerise1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Excerise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
