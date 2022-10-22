import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationProfileDeleteComponent } from './confirmation-profile-delete.component';

describe('ConfirmationProfileDeleteComponent', () => {
  let component: ConfirmationProfileDeleteComponent;
  let fixture: ComponentFixture<ConfirmationProfileDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationProfileDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationProfileDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
