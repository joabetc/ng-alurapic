import { Component } from "@angular/core";
import { PhotoComponent } from "../photo/photo.component";

@Component({
    moduleId: module.id,
    selector: 'registration',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent {

    photo: PhotoComponent = new PhotoComponent();

    insert(event) {
        event.preventDefault();
    }
}