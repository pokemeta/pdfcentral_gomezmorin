import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiUploadComponent } from './di-upload.component';

describe('DiUploadComponent', () => {
  let component: DiUploadComponent;
  let fixture: ComponentFixture<DiUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiUploadComponent]
    });
    fixture = TestBed.createComponent(DiUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
