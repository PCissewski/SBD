import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
    providedIn: 'root'
})

export class RecordService {
    url: string = "https://localhost:7064/Record?record="

    constructor (private http: HttpClient) {}

    postAddRecord(postData: string){
        console.log("To add record: " + postData);
        return this.http.post(`${this.url+postData}`, postData, httpOptions).subscribe(responseData => {
            console.log(responseData);
        });
    }

    
}