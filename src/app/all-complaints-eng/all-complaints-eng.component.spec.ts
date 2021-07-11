import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComplaintsEngComponent } from './all-complaints-eng.component';

describe('AllComplaintsEngComponent', () => {
  let component: AllComplaintsEngComponent;
  let fixture: ComponentFixture<AllComplaintsEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllComplaintsEngComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComplaintsEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
