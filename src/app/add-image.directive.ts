import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAddImage]'
})
export class AddImageDirective {

  @Input() name: string;

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit() {
    console.log(this.element.nativeElement);
    this.element.nativeElement.setAttribute('src', `./assets/img/${this.name}.svg`)
  }

}
