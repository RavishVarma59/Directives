import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighlightTextServiceService {

  constructor() { }
  toggleHighlight: Subject<boolean> = new Subject<boolean>();
  textSearched : Subject<string> = new Subject<string>();
}
