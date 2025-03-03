import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  listOfDirectives: string[] = ['HighLight-Dir','Mention-Dire'];
  selectedComponent: string = 'HighLight-Dir';

    constructor(){
    console.log(this.listOfDirectives.length);
    }

    selectDirective(directive: string){
    // console.log(directive);
    this.selectedComponent = directive;
    }

}
