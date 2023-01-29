import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueVoitureSaveComponent } from './marque-voiture-save.component';

describe('MarqueVoitureSaveComponent', () => {
  let component: MarqueVoitureSaveComponent;
  let fixture: ComponentFixture<MarqueVoitureSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueVoitureSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueVoitureSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
