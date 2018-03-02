import { Component } from "@angular/core";
import { PhotoService } from "../photo/photo.service";
import { PhotoComponent } from "../photo/photo.component";

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: './list.component.html'
})
export class ListComponent {

    photos: PhotoComponent[] = [];

    constructor(service: PhotoService) {
        service.list()
            .subscribe(photos => {
                this.photos = photos;
            }, error => console.log(error));
    }

    remove(photo: PhotoComponent) {
        console.log(photo.titulo);
    }
 }