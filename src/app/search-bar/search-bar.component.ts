import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'jd-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnChanges {

  searchText: string = "";
  
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes: ", changes);
    if (changes['searchText']) {
      console.log("Search Text: ", this.searchText);
    }
  }

  onTextEnter(event: any) {
    this.searchText = event.target.value;
    console.log("Search Text: ", this.searchText); 
  }



}
