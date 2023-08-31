import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbUploadComponent } from './db-upload.component';

describe('DbUploadComponent', () => {
  let component: DbUploadComponent;
  let fixture: ComponentFixture<DbUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbUploadComponent]
    });
    fixture = TestBed.createComponent(DbUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
