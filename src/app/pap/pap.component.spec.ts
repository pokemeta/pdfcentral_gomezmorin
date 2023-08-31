import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapComponent } from './pap.component';

describe('PapComponent', () => {
  let component: PapComponent;
  let fixture: ComponentFixture<PapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PapComponent]
    });
    fixture = TestBed.createComponent(PapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
