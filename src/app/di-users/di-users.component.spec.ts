import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiUsersComponent } from './di-users.component';

describe('DiUsersComponent', () => {
  let component: DiUsersComponent;
  let fixture: ComponentFixture<DiUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiUsersComponent]
    });
    fixture = TestBed.createComponent(DiUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
