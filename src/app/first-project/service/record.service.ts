import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable()

export class RecordService {
    url: string = "https://localhost:7064/Record?record="

    constructor (private http: HttpClient) {}

    postAddRecord(postData: string){
        console.log("To add record: " + postData);
        return this.http.post(`${this.url+postData}`, {observe: 'response'})
        .subscribe(response => {
            console.log(response)
        });
        
    }
}