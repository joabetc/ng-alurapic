import { Component } from "@angular/core";
import { PhotoComponent } from "../photo/photo.component";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'registration',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent {

    photo: PhotoComponent = new PhotoComponent();
    myForm: FormGroup;
    service: PhotoService;
    route: ActivatedRoute;

    constructor(service: PhotoService, fb: FormBuilder, route: ActivatedRoute) {
        this.service = service;
        this.route = route;
        this.route.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.service.getById(id)
                    .subscribe(
                        photo => this.photo = photo,
                        error => console.log(error)
                    );
            }
        });
        this.myForm = fb.group({
            title: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            description: ['']
        });
    }

    insert(event) {
        event.preventDefault();
        this.service
            .register(this.photo)
            .subscribe(() => {
                console.log('Photo successfully saved');
                this.photo = new PhotoComponent();
            }, error => console.log(error));
    }
}