import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCallComponent } from './form-call.component';

describe('FormCallComponent', () => {
  let component: FormCallComponent;
  let fixture: ComponentFixture<FormCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
