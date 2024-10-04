import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalandlyComponent } from './calandly.component';

describe('CalandlyComponent', () => {
  let component: CalandlyComponent;
  let fixture: ComponentFixture<CalandlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalandlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalandlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
