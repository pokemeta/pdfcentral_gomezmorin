import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootUsersComponent } from './root-users.component';

describe('RootUsersComponent', () => {
  let component: RootUsersComponent;
  let fixture: ComponentFixture<RootUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RootUsersComponent]
    });
    fixture = TestBed.createComponent(RootUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
