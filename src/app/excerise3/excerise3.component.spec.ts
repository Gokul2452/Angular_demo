import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Excerise3Component } from './excerise3.component';

describe('Excerise3Component', () => {
  let component: Excerise3Component;
  let fixture: ComponentFixture<Excerise3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Excerise3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Excerise3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
