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
    service: PhotoService;

    constructor(service: PhotoService) {
        this.service = service;
        this.service.list()
            .subscribe(photos => {
                this.photos = photos;
            }, error => console.log(error));
    }

    remove(photo: PhotoComponent) {
        this.service.remove(photo)
            .subscribe(
                () => {
                    console.log('Photo successfully removed');
                    let newPhotos = this.photos.slice(0);
                    let index = newPhotos.indexOf(photo);
                    newPhotos.splice(index, 1);
                    this.photos = newPhotos;
                },
            error => console.log(error)
        );
    }
 }