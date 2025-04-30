import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  listOfDirectives: string[] = ['HighLight','Mention'];
  selectedComponent: string = 'HighLight';

    constructor(){
    console.log(this.listOfDirectives.length);
    }

    selectDirective(directive: string){
    // console.log(directive);
    this.selectedComponent = directive;
    }

}
