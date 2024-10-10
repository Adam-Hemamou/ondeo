import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosStructuredComponent } from './videos-structured.component';

describe('VideosStructuredComponent', () => {
  let component: VideosStructuredComponent;
  let fixture: ComponentFixture<VideosStructuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosStructuredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosStructuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
