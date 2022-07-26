import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiPendingListComponent } from './emi-pending-list.component';

describe('EmiPendingListComponent', () => {
  let component: EmiPendingListComponent;
  let fixture: ComponentFixture<EmiPendingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiPendingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmiPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
