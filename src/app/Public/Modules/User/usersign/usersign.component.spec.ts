import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersignComponent } from './usersign.component';

describe('UsersignComponent', () => {
  let component: UsersignComponent;
  let fixture: ComponentFixture<UsersignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
