import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgViewsentfilesComponent } from './dg-viewsentfiles.component';

describe('DgViewsentfilesComponent', () => {
  let component: DgViewsentfilesComponent;
  let fixture: ComponentFixture<DgViewsentfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DgViewsentfilesComponent]
    });
    fixture = TestBed.createComponent(DgViewsentfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
