import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgUsersComponent } from './dg-users.component';

describe('DgUsersComponent', () => {
  let component: DgUsersComponent;
  let fixture: ComponentFixture<DgUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DgUsersComponent]
    });
    fixture = TestBed.createComponent(DgUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
