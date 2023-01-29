import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarquePieceComponent } from './marque-piece.component';

describe('MarquePieceComponent', () => {
  let component: MarquePieceComponent;
  let fixture: ComponentFixture<MarquePieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarquePieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarquePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
