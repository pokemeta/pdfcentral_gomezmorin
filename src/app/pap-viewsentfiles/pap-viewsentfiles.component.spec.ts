import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapViewsentfilesComponent } from './pap-viewsentfiles.component';

describe('PapViewsentfilesComponent', () => {
  let component: PapViewsentfilesComponent;
  let fixture: ComponentFixture<PapViewsentfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PapViewsentfilesComponent]
    });
    fixture = TestBed.createComponent(PapViewsentfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
