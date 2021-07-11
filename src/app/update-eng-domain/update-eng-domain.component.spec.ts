import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEngDomainComponent } from './update-eng-domain.component';

describe('UpdateEngDomainComponent', () => {
  let component: UpdateEngDomainComponent;
  let fixture: ComponentFixture<UpdateEngDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEngDomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEngDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
