import { Http, Headers, Response } from "@angular/http";
import { PhotoComponent } from "./photo.component";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class PhotoService {

  http: Http;
  headers: Headers;
  url: string = 'v1/fotos';

  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  register(photo: PhotoComponent): Observable<Response> {
    return this.http
      .post(this.url, JSON.stringify(photo), {headers: this.headers});
  }

  list(): Observable<PhotoComponent[]> {
    return this.http
      .get(this.url)
      .map(res => res.json());
  }
}