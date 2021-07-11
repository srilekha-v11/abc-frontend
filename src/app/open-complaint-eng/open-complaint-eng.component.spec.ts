import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenComplaintEngComponent } from './open-complaint-eng.component';

describe('OpenComplaintEngComponent', () => {
  let component: OpenComplaintEngComponent;
  let fixture: ComponentFixture<OpenComplaintEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenComplaintEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenComplaintEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
