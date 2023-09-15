import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiSendFilesComponent } from './di-send-files.component';

describe('DiSendFilesComponent', () => {
  let component: DiSendFilesComponent;
  let fixture: ComponentFixture<DiSendFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiSendFilesComponent]
    });
    fixture = TestBed.createComponent(DiSendFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
