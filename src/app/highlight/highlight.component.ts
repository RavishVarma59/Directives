import { Component } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.scss'
})
export class HighlightComponent {
  isHighlight: boolean = true;

  toggleHighlight(){
    this.isHighlight = true;
  }
}
