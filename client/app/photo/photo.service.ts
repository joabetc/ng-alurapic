import { Http } from "@angular/http/src/http";
import { PhotoComponent } from "./photo.component";
import { Headers } from "@angular/http/src/headers";

class PhotoService {

  http: Http;
  headers: Headers;
  url: string = 'v1/fotos';

  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  register(photo: PhotoComponent) {
    return this.http
      .post(this.url, JSON.stringify(photo), {headers: this.headers});
  }

  list() {
    return this.http
      .get(this.url)
      .map(res => res.json());
  }
}