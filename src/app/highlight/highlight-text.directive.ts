import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnInit {
  @Input()
  highlightText!: boolean;

  constructor(private elementRef:ElementRef) { 
    console.log('ElementRef', elementRef);
  }
  ngOnInit(): void {
    if(this.highlightText){
      this.elementRef.nativeElement.style.backgroundColor = 'yellow';
      this.elementRef.nativeElement.style.color = 'red';
  }
  }

}
