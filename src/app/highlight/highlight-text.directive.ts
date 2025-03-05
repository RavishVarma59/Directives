import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { HighlightTextServiceService } from './service/highlight-text-service.service';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnInit {
  @Input()
  toggleHighLight: boolean = false;

  @Input()
  highlightByHover: boolean = false;

  @Input()
  defaultColor: any = {backgroundColor: 'yellow', color: 'red'};



  @HostListener('mouseover', ['$event'])
  onMouseEnter(event:any) {
    if(this.highlightByHover){this.highlight(true); }
  }
  
  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event:any) {
    if(this.highlightByHover){this.highlight(false); }
  }

  @HostListener('click', ['$event'])
  onClick(event:any) {
    if(this.highlightByHover){this.highlight(true); }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseHover(event:any) {
    if(this.highlightByHover){this.highlight(true); }
  }


  constructor(private elementRef:ElementRef, private highlightService : HighlightTextServiceService) { 
    console.log('ElementRef', elementRef);
  }

  ngOnInit(): void {
    this.highlightService.toggleHighlight.subscribe((value) => {
      if(this.toggleHighLight){
        this.highlight(value);
      }
    });
  }

  highlight(isHighlight: boolean) {
    if(isHighlight){
      this.elementRef.nativeElement.style.backgroundColor = this.defaultColor.backgroundColor;
      this.elementRef.nativeElement.style.color = this.defaultColor.color;
    }else{
      this.elementRef.nativeElement.style.backgroundColor = 'white';
      this.elementRef.nativeElement.style.color = 'black';
    }
  }

}
