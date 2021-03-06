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

  register(photo: PhotoComponent): Observable<ServiceMessage> {
    if (photo._id) {
      return this.http
        .put(this.url + '/' + photo._id, JSON.stringify(photo), {headers: this.headers})
        .map(() => new ServiceMessage('Photo successfully updated!', false));
    } else {
      return this.http
        .post(this.url, JSON.stringify(photo), {headers: this.headers})
        .map(() => new ServiceMessage('Photo successfully saved!', true));
    }
  }

  list(): Observable<PhotoComponent[]> {
    return this.http
      .get(this.url)
      .map(res => res.json());
  }

  remove(photo: PhotoComponent): Observable<Response> {
    return this.http.delete(this.url + '/' + photo._id);
  }

  getById(id: string): Observable<PhotoComponent> {
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }
}

export class ServiceMessage {

  constructor(private _message: string, private _insert: boolean) {
    this._message = _message;
    this._insert = _insert;
  }

  get message(): string {
    return this._message;
  }

  get insert(): boolean {
    return this._insert;
  }
}