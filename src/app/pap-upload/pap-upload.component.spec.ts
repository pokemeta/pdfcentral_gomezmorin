import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapUploadComponent } from './pap-upload.component';

describe('PapUploadComponent', () => {
  let component: PapUploadComponent;
  let fixture: ComponentFixture<PapUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PapUploadComponent]
    });
    fixture = TestBed.createComponent(PapUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
