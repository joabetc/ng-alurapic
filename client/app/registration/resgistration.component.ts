import { Component } from "@angular/core";
import { PhotoComponent } from "../photo/photo.component";
import { Http, Headers } from "@angular/http";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'registration',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent {

    photo: PhotoComponent = new PhotoComponent();
    http: Http;
    myForm: FormGroup;

    constructor(http: Http, fb: FormBuilder) {
        this.http = http;
        this.myForm = fb.group({
            title: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            description: ['']
        });
    }

    insert(event) {
        event.preventDefault();
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http
            .post('v1/fotos', JSON.stringify(this.photo), {headers: headers} )
            .subscribe(() => {
                this.photo = new PhotoComponent();
                console.log("Photo successfully saved");
            }, erro => console.log(erro));
    }
}