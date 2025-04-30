import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HighlightTextServiceService } from '../highlight/service/highlight-text-service.service';

@Component({
  selector: 'jd-reactive-table',
  templateUrl: './reactive-table.component.html',
  styleUrl: './reactive-table.component.scss'
})
export class ReactiveTableComponent implements OnInit {

  headers = [
    "id", "firstName", "lastName", "maidenName", "age", "gender", "email", "phone", "username", "password", "birthDate", "image", "bloodGroup", "height", "weight", "eyeColor", "hair", "ip", "address", "macAddress", "university", "bank", "company", "ein", "ssn", "userAgent", "crypto", "role"
  ];

  headerToShow = ["username", "email", "role" , "password", "gender", "phone"];

  records: any[] = [];
  allRecords: any[] = [];
  searchedText: string = "";

  constructor(private highlightService: HighlightTextServiceService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.getRecords()
  }

  getRecords() {
    // Fetch records from API
    fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then((data:any) => {
      console.log(data);
      // this.allRecords = data?.users;
      data?.users.forEach((record : any) => {
        let newRecord: any = {};
        this.headerToShow.forEach((col: any) => {
          newRecord[col] = record[col];
        });
        this.records.push(newRecord);
      });
      this.allRecords = this.records;
      console.log("Records: ", this.records);

    }).catch(error => {
      console.error('Error:', error)
    });
  }

  filterRecords(searchedText: string) {
    this.records = this.allRecords.filter((record) =>
      Object.values(record).join().toLowerCase().includes(this.searchedText.toLowerCase())
    );
  }


  onSearch(event:any){
    console.log("table search ",event);
    this.searchedText = event;
    if(!this.searchedText) {
      this.records = this.allRecords;
    } else {
      this.filterRecords(this.searchedText);
      // this.cd.detectChanges();
    }
    // this.cd.detectChanges();
    setTimeout(() => {
    this.highlightService.textSearched.next(event);
      
    }, 0);
    // this.records = this.allRecords.filter((record: any) => {
    //   return Object.values(record).join().includes(this.searchedText);
    // });
  }

}
