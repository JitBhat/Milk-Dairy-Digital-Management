import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrFarmerlistComponent } from './mgr-farmerlist.component';

describe('MgrFarmerlistComponent', () => {
  let component: MgrFarmerlistComponent;
  let fixture: ComponentFixture<MgrFarmerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgrFarmerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MgrFarmerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
