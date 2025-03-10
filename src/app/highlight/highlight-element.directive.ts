import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { HighlightTextServiceService } from './service/highlight-text-service.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[JdHighlightElement]'
})
export class HighlightElementDirective implements OnInit, AfterViewInit, OnDestroy {

  @Input('JdHighlightElement')
  textToHighlight!: string;

  private textSub!: Subscription;
  constructor(private _ele: ElementRef, private highlightService : HighlightTextServiceService) {
    console.log("high light constructor ele ")
   }
  ngOnDestroy(): void {
    if (this.textSub) {
      this.textSub.unsubscribe(); // Cleanup subscription to prevent memory leaks
    }
  }
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.textSub = this.highlightService.textSearched.subscribe((text:string) => {

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
    const escapedText = text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${escapedText})`, 'gi');

    // Replace matched text with a span that highlights it
    const highlightedHTML = innerHTML.replace(regex, `<span style="background-color: yellow;">$1</span>`);

    element.innerHTML = highlightedHTML;
  }

}
