import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComplaintsAdminComponent } from './all-complaints-admin.component';

describe('AllComplaintsAdminComponent', () => {
  let component: AllComplaintsAdminComponent;
  let fixture: ComponentFixture<AllComplaintsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllComplaintsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComplaintsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
