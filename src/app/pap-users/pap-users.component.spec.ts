import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapUsersComponent } from './pap-users.component';

describe('PapUsersComponent', () => {
  let component: PapUsersComponent;
  let fixture: ComponentFixture<PapUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PapUsersComponent]
    });
    fixture = TestBed.createComponent(PapUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
