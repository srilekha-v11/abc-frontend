import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngComplaintComponent } from './eng-complaint.component';

describe('EngComplaintComponent', () => {
  let component: EngComplaintComponent;
  let fixture: ComponentFixture<EngComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngComplaintComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
