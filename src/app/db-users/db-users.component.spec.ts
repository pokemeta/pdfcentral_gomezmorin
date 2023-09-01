import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbUsersComponent } from './db-users.component';

describe('DbUsersComponent', () => {
  let component: DbUsersComponent;
  let fixture: ComponentFixture<DbUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbUsersComponent]
    });
    fixture = TestBed.createComponent(DbUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
