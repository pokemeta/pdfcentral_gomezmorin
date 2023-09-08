import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgSendFilesComponent } from './dg-send-files.component';

describe('DgSendFilesComponent', () => {
  let component: DgSendFilesComponent;
  let fixture: ComponentFixture<DgSendFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DgSendFilesComponent]
    });
    fixture = TestBed.createComponent(DgSendFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
