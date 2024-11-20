import { NgClass, NgIf } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { scrollToSectionCal } from '../../utils/scrolls';

@Component({
  selector: 'app-promise',
  standalone: true,
  imports: [NgIf],
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements AfterViewInit {
  @Input() isMobile!: boolean;
  isLightOn = false;

  constructor(private cdr: ChangeDetectorRef) {}

  scrollToCalendly() {
    scrollToSectionCal();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLightOn = true;
      this.cdr.detectChanges();
    }, 4000);
  }
}
