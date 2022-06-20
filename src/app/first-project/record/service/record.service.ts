import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable()

export class RecordService {
    url: string = "https://localhost:7064/Record?record=";
    records: Array<string> = [];

    constructor (private http: HttpClient) {}

    postAddRecord(postData: string){
        console.log("To add record: " + postData);
        
        return this.http.post(`${this.url+postData}`, postData, {observe: 'response'})
        .subscribe(response => {
            console.log(`Response status code: ${response.status}`)
            if (response.status == 200){
                console.log("Succesfully added record!")
                this.records.push(postData);
            }
        });

    }

}