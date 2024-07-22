import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchloaddetailComponent } from './dispatchloaddetail.component';

describe('DispatchloaddetailComponent', () => {
  let component: DispatchloaddetailComponent;
  let fixture: ComponentFixture<DispatchloaddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchloaddetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchloaddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
