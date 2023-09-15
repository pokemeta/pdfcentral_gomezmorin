import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiViewsentfilesComponent } from './di-viewsentfiles.component';

describe('DiViewsentfilesComponent', () => {
  let component: DiViewsentfilesComponent;
  let fixture: ComponentFixture<DiViewsentfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiViewsentfilesComponent]
    });
    fixture = TestBed.createComponent(DiViewsentfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
