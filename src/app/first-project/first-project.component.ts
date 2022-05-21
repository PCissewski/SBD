import { Component, OnInit } from '@angular/core';
import { RecordService } from './service/record.service';

@Component({
  selector: 'app-first-project',
  templateUrl: './first-project.component.html',
  styleUrls: ['./first-project.component.css']
})

export class FirstProjectComponent implements OnInit {
  name: string = "";
  recordAdded: boolean = false;

  emptyRecordMessage: string = "Can't add empty record!";
  emptyRecordWarning: boolean = false;

  constructor(private myService: RecordService) { }

  ngOnInit(): void {
  }

  onEnter(value: string){
    this.myService.postAddRecord(value);
    if (value == "") {
      this.emptyRecordWarning = true;
      this.recordAdded = false;
      return;
    }

    this.emptyRecordWarning = false;
    this.recordAdded = true;
    this.name = value;
  }

}
