import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPresComponent } from './video-pres.component';

describe('VideoPresComponent', () => {
  let component: VideoPresComponent;
  let fixture: ComponentFixture<VideoPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
