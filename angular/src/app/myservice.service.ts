import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
@Injectable()
export class MyserviceService {
private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  //private options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }
 getPosts() {
        return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=1").map(res => res.json());
    }

}
