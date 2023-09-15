import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbSendFilesComponent } from './db-send-files.component';

describe('DbSendFilesComponent', () => {
  let component: DbSendFilesComponent;
  let fixture: ComponentFixture<DbSendFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbSendFilesComponent]
    });
    fixture = TestBed.createComponent(DbSendFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
