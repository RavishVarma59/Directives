import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { HighlightTextServiceService } from './service/highlight-text-service.service';

@Directive({
  selector: '[JdHighlightElement]'
})
export class HighlightElementDirective implements OnInit, AfterViewInit {

  @Input('JdHighlightElement')
  textToHighlight!: string;

  constructor(private _ele: ElementRef, private highlightService : HighlightTextServiceService) {
    console.log("high light constructor ele ")
   }
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.highlightService.textSearched.subscribe((text:string) => {

        this.textToHighlight = text;
        console.log("highlight text : ", this.textToHighlight);
        this.highlightText(this.textToHighlight);
      
    })

  }

  private highlightText(text: string) {
    const element = this._ele.nativeElement;
    const innerHTML =element.innerHTML.replace(/<span style="background-color: yellow;">(.*?)<\/span>/gi, '$1');
    this._ele.nativeElement.innerHTML = innerHTML
    if(!text) { return;}
    const regex = new RegExp(`(${text})`, 'gi'); // Case-insensitive search

    // Replace matched text with a span that highlights it
    const highlightedHTML = innerHTML.replace(regex, `<span style="background-color: yellow;">$1</span>`);

    element.innerHTML = highlightedHTML;
  }

}
