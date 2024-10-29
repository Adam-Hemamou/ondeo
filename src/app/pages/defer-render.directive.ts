import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDeferRender]',
  standalone: true,
})
export class DeferRenderDirective {
  @Output() isVisible = new EventEmitter<boolean>();
  private isElementVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkVisibility();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkVisibility();
  }

  ngOnInit() {
    this.checkVisibility();
  }

  private checkVisibility() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible && !this.isElementVisible) {
      this.isElementVisible = true;
      this.isVisible.emit(true);
    }
  }
}
