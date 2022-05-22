import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { map, pipe } from "rxjs";

@Injectable()

export class RecordService {
    url: string = "https://localhost:7064/Record?record="

    constructor (private http: HttpClient) {}

    postAddRecord(postData: string){
        console.log("To add record: " + postData);
        return this.http.post(`${this.url+postData}`, postData, {observe: 'response'})
        .subscribe(response => {
            console.log(`Response status code: ${response.status}`)
        });
        
    }
}