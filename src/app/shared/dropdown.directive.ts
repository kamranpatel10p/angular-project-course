import { Directive, HostListener, ElementRef, Renderer2, ViewChild, ContentChild } from "@angular/core";

@Directive({
  selector: '[appDropdown]',
})

export class DropdownDirective {
  @ContentChild('dropdownMenu') dropdownMenu!: ElementRef<HTMLElement>;
  @ContentChild('dropdownToggle') dropdownToggle!: ElementRef<HTMLElement>;
  constructor(private renderer: Renderer2) { }

  private isOpen = false;

  @HostListener('click', ['$event']) toggleOpen(eventData: Event) {
    if (this.isOpen) {
      this.dropdownToggle.nativeElement.classList.remove('show');
      this.dropdownMenu.nativeElement.classList.remove('show');
    } else {
      this.dropdownToggle.nativeElement.classList.add('show');
      this.dropdownMenu.nativeElement.classList.add('show');
    }
    this.isOpen = !this.isOpen;
  }
}