import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    photos: Object[] = [];

    constructor(http: Http) {
        let stream = http.get('v1/fotos');
        stream.subscribe(res => {
            this.photos = res.json();
        });
    }
 }