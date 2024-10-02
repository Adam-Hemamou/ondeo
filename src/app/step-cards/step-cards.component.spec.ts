import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCardsComponent } from './step-cards.component';

describe('StepCardsComponent', () => {
  let component: StepCardsComponent;
  let fixture: ComponentFixture<StepCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
