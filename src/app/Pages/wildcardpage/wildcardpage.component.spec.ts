import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardpageComponent } from './wildcardpage.component';

describe('WildcardpageComponent', () => {
  let component: WildcardpageComponent;
  let fixture: ComponentFixture<WildcardpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildcardpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
