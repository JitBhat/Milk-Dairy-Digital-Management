import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrRegisterComponent } from './mgr-register.component';

describe('MgrRegisterComponent', () => {
  let component: MgrRegisterComponent;
  let fixture: ComponentFixture<MgrRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgrRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MgrRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
