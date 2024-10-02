import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionSectionComponent } from './motion-section.component';

describe('MotionSectionComponent', () => {
  let component: MotionSectionComponent;
  let fixture: ComponentFixture<MotionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotionSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
