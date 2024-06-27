import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorfooterComponent } from './paginatorfooter.component';

describe('PaginatorfooterComponent', () => {
  let component: PaginatorfooterComponent;
  let fixture: ComponentFixture<PaginatorfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
