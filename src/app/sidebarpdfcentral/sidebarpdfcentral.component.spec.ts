import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarpdfcentralComponent } from './sidebarpdfcentral.component';

describe('SidebarpdfcentralComponent', () => {
  let component: SidebarpdfcentralComponent;
  let fixture: ComponentFixture<SidebarpdfcentralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarpdfcentralComponent]
    });
    fixture = TestBed.createComponent(SidebarpdfcentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
