import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerLoggedComponent } from './engineer-logged.component';

describe('EngineerLoggedComponent', () => {
  let component: EngineerLoggedComponent;
  let fixture: ComponentFixture<EngineerLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
