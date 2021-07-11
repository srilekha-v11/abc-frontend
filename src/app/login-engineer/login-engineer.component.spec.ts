import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEngineerComponent } from './login-engineer.component';

describe('LoginEngineerComponent', () => {
  let component: LoginEngineerComponent;
  let fixture: ComponentFixture<LoginEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
