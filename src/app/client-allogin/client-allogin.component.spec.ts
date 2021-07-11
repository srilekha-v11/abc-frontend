import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientALloginComponent } from './client-allogin.component';

describe('ClientALloginComponent', () => {
  let component: ClientALloginComponent;
  let fixture: ComponentFixture<ClientALloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientALloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientALloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
