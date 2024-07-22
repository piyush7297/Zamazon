import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchLoadComponent } from './dispatch-load.component';

describe('DispatchLoadComponent', () => {
  let component: DispatchLoadComponent;
  let fixture: ComponentFixture<DispatchLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
