import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubheaderComponent } from './admin-subheader.component';

describe('AdminSubheaderComponent', () => {
  let component: AdminSubheaderComponent;
  let fixture: ComponentFixture<AdminSubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSubheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
