import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyerComponent } from './loyer.component';

describe('LoyerComponent', () => {
  let component: LoyerComponent;
  let fixture: ComponentFixture<LoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
