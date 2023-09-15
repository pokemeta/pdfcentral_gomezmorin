import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbViewsentfilesComponent } from './db-viewsentfiles.component';

describe('DbViewsentfilesComponent', () => {
  let component: DbViewsentfilesComponent;
  let fixture: ComponentFixture<DbViewsentfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbViewsentfilesComponent]
    });
    fixture = TestBed.createComponent(DbViewsentfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
