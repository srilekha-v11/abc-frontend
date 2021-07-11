import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEngineerComponent } from './delete-engineer.component';

describe('DeleteEngineerComponent', () => {
  let component: DeleteEngineerComponent;
  let fixture: ComponentFixture<DeleteEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
