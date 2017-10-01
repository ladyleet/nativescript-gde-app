import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

export interface Gde {
  fullname: string;
  bio: string;
}

@Injectable()
  export class GdesService {
    
    constructor(private http: Http) {

    }

    // getGdes(): Observable<Gde[]> {
    //   return this.http.get("https://gde-assistant.firebaseio.com/gdes.json")
    //   .map(res => res.json())
    // }
}

