import { Pipe, PipeTransform } from "@angular/core";
import { PhotoComponent } from "./photo.component";

@Pipe({
    name: 'titleFilter'
})
export class TitleFilter implements PipeTransform {
    
    transform(photos: PhotoComponent[], filter: string) {
        return photos.filter(photo => photo.title.toLowerCase().includes(filter.toLowerCase()));
    }
}