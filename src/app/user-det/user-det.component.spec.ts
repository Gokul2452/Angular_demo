import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetComponent } from './user-det.component';

describe('UserDetComponent', () => {
  let component: UserDetComponent;
  let fixture: ComponentFixture<UserDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
