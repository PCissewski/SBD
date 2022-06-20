import { Component, OnInit } from '@angular/core';
import { RecordService } from './service/record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
  }

  addRecord(record: string){
    this.recordService.postAddRecord(record)
  }

}
