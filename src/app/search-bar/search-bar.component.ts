import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'jd-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnChanges {

  searchText: string = "";

  @Output()
  searchedTxt: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes: ", changes);
    if (changes['searchText']) {
      console.log("Search Text: ", this.searchText);
    }
  }

  onTextEnter(event: any) {
    this.searchText = event;
    console.log("input text: ", this.searchText); 
  }

  onSearch(event: any) {
    console.log("Emit : ", this.searchText);
    this.searchedTxt.emit(this.searchText);
  }


}
