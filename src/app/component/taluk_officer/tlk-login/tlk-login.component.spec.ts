import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlkLoginComponent } from './tlk-login.component';

describe('TlkLoginComponent', () => {
  let component: TlkLoginComponent;
  let fixture: ComponentFixture<TlkLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlkLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TlkLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
