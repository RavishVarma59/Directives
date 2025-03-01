import { Component } from '@angular/core';
import { HighlightTextServiceService } from './service/highlight-text-service.service';

@Component({
  selector: 'highlight-comp',
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.scss'
})
export class HighlightComponent {
  constructor(private highlightService: HighlightTextServiceService) { }
  isHighlight: boolean = false;

  toggleHighlight(){
    this.isHighlight = !this.isHighlight;
    this.highlightService.toggleHighlight.next(this.isHighlight);
  }
}
