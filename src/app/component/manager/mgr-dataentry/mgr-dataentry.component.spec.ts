import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrDataentryComponent } from './mgr-dataentry.component';

describe('MgrDataentryComponent', () => {
  let component: MgrDataentryComponent;
  let fixture: ComponentFixture<MgrDataentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgrDataentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MgrDataentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
