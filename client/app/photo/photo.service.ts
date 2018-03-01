import { Http } from "@angular/http/src/http";
import { PhotoComponent } from "./photo.component";
import { Headers } from "@angular/http/src/headers";

class PhotoService {

  http: Http;
  headers: Headers;

  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  register(photo: PhotoComponent) {

  }

  list() {

  }
}