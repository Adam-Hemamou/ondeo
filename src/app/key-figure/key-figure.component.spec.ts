import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFigureComponent } from './key-figure.component';

describe('KeyFigureComponent', () => {
  let component: KeyFigureComponent;
  let fixture: ComponentFixture<KeyFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyFigureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
