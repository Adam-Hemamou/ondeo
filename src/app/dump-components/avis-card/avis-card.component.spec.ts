import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisCardComponent } from './avis-card.component';

describe('AvisCardComponent', () => {
  let component: AvisCardComponent;
  let fixture: ComponentFixture<AvisCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
