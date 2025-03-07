import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jd-reactive-table',
  templateUrl: './reactive-table.component.html',
  styleUrl: './reactive-table.component.scss'
})
export class ReactiveTableComponent implements OnInit {

  headers = [
    "id", "firstName", "lastName", "maidenName", "age", "gender", "email", "phone", "username", "password", "birthDate", "image", "bloodGroup", "height", "weight", "eyeColor", "hair", "ip", "address", "macAddress", "university", "bank", "company", "ein", "ssn", "userAgent", "crypto", "role"
  ];

  headerToShow = ["username", "lastName", "role" , "password", "gender", "bloodGroup"];

  records: any[] = [];
  allRecords: any[] = [];

  constructor() {}

  ngOnInit() {
    this.getRecords()
  }

  getRecords() {
    // Fetch records from API
    fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then((data:any) => {
      console.log(data);
      this.allRecords = data?.users;
      data?.users.forEach((record : any) => {
        let newRecord: any = {};
        this.headerToShow.forEach((col: any) => {
          newRecord[col] = record[col];
        });
        this.records.push(newRecord);
      });
      console.log("Records: ", this.records);

    }).catch(error => {
      console.error('Error:', error)
    });
  }

}
