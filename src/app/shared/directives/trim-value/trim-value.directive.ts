import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appTrimValue]',
})
export class TrimValueDirective {
  constructor(private ele: ElementRef, private ngControl: NgControl) {}

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    const value = $event.target.value.trim();
    this.ele.nativeElement.value = value;
    if (this.ngControl.control) {
      this.ngControl.control.setValue(value);
    }
  }
}
