import{Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/rx';

@Injectable() 
class ContactService {
    constructor(public http: Http){}

    getContact(): any {
        console.log("Called");
        return this.http.get("http://localhost:8080/person", {})
        .map((resp: Response) => {
            console.log(resp.json())
            return resp.json();
        })
    }

    createContact(person): any {
        this.http.post("http://localhost:8080/person", {person})
    }
}

export {ContactService};