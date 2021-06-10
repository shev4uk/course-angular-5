import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appMark]'
})
export class MarkDirective {

  @Input() colorBack: string;
  @Output() test = new EventEmitter();

  @HostListener('click') onClick() {
    this.test.emit('click');
  }

  constructor(
    private element: ElementRef
  ) {}

  ngOnInit() {
    console.log(this.element.nativeElement, this.colorBack);
    this.element.nativeElement.style.backgroundColor = this.colorBack;
  }

}
