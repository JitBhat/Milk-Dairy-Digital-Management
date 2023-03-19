import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlkRegisterComponent } from './tlk-register.component';

describe('TlkRegisterComponent', () => {
  let component: TlkRegisterComponent;
  let fixture: ComponentFixture<TlkRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlkRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TlkRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
