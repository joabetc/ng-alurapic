import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titleFilter'
})
export class TitleFilter implements PipeTransform {
    
    transform(photos, filter) {

    }
}