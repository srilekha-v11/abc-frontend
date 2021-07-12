import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfComplaintsComponent } from './list-of-complaints.component';

describe('ListOfComplaintsComponent', () => {
  let component: ListOfComplaintsComponent;
  let fixture: ComponentFixture<ListOfComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfComplaintsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
