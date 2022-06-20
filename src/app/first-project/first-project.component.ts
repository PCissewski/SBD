import { Component, OnInit } from '@angular/core';
import { RecordComponent } from './record/record.component';
import { RecordService } from './record/service/record.service';

@Component({
  selector: 'app-first-project',
  templateUrl: './first-project.component.html',
  styleUrls: ['./first-project.component.css']
})

export class FirstProjectComponent implements OnInit {
  name: string = "";
  recordAdded: boolean = false;

  recordMessageWarning: string = "Invalid record format";
  emptyRecordWarning: boolean = false;

  constructor(private recordComponent: RecordComponent) { }

  ngOnInit(): void {
  }

  onEnter(value: string){
    
    if (this.validateValue(value)) {
      console.log(this.recordMessageWarning)
      this.emptyRecordWarning = true;
      this.recordAdded = false;
      return;
    }

    this.recordComponent.addRecord(value);

    this.emptyRecordWarning = false;
    this.recordAdded = true;
    this.name = value;
  }

  validateValue(str: string){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return str == "" || specialChars.test(str);
  }

}
