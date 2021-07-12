import { asNativeElements } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminComponent } from './login-admin.component';

describe('LoginAdminComponent', () => {
  let component: LoginAdminComponent;
  let fixture: ComponentFixture<LoginAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginAdminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// it(‘should change title to Unit Test App’, async(() => {
//   const fixture = TestBed.createComponent(AppComponent);
//   fixture.nativeElement.querySelector(‘button’).click();
//   fixture.detectChanges();
//   expect(fixture.nativeElement.querySelector(‘h1’)
//   .textContent).toEqual('Unit Test App');
//   }));
