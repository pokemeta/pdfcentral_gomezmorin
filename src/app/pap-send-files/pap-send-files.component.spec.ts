import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapSendFilesComponent } from './pap-send-files.component';

describe('PapSendFilesComponent', () => {
  let component: PapSendFilesComponent;
  let fixture: ComponentFixture<PapSendFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PapSendFilesComponent]
    });
    fixture = TestBed.createComponent(PapSendFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
