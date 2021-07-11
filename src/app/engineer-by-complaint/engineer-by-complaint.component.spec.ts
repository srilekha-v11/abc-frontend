import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerByComplaintComponent } from './engineer-by-complaint.component';

describe('EngineerByComplaintComponent', () => {
  let component: EngineerByComplaintComponent;
  let fixture: ComponentFixture<EngineerByComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerByComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerByComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
