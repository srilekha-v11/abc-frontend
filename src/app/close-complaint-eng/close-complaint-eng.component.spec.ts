import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseComplaintEngComponent } from './close-complaint-eng.component';

describe('CloseComplaintEngComponent', () => {
  let component: CloseComplaintEngComponent;
  let fixture: ComponentFixture<CloseComplaintEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloseComplaintEngComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseComplaintEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
