import { Directive, ElementRef, HostListener } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Directive({ selector: '[hoverScale]', standalone: true })
export class HoverScaleDirective {
  private player: any;
  constructor(private el: ElementRef, private builder: AnimationBuilder) {}
  @HostListener('mouseenter') onEnter() {
    this.player = this.builder.build([
      style({ transform: 'scale(1)', opacity: 1 }),
      animate('180ms cubic-bezier(.2,.8,.2,1)', style({ transform: 'scale(1.06)', opacity: 0.95 }))
    ]).create(this.el.nativeElement);
    this.player.play();
  }
  @HostListener('mouseleave') onLeave() {
    if (this.player) {
      this.player = this.builder.build([animate('160ms cubic-bezier(.2,.8,.2,1)', style({ transform: 'scale(1)', opacity: 1 }))]).create(this.el.nativeElement);
      this.player.play();
    }
  }
}
