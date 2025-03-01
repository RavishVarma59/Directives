import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { HighlightTextServiceService } from './service/highlight-text-service.service';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnInit {
  @Input()
  highlightText: boolean = false;

  constructor(private elementRef:ElementRef, private highlightService : HighlightTextServiceService) { 
    console.log('ElementRef', elementRef);
  }
  ngOnInit(): void {
    this.highlightService.toggleHighlight.subscribe((value) => {
      this.highlightText = value;
      this.highlight(this.highlightText);
    });
  }

  highlight(isHighlight: boolean){
    if(isHighlight){
      this.elementRef.nativeElement.style.backgroundColor = 'yellow';
      this.elementRef.nativeElement.style.color = 'red';
    }else{
      this.elementRef.nativeElement.style.backgroundColor = 'white';
      this.elementRef.nativeElement.style.color = 'black';
    }
  }

}
