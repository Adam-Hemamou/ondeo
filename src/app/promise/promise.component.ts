import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-promise',
  standalone: true,
  imports: [NgClass],
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements AfterViewInit {
  @Input() isMobile!: boolean;
  isLightOn = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLightOn = true;
      this.cdr.detectChanges();
    }, 2000);
  }
}
