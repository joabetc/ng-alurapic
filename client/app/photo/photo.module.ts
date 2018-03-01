import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo.component';
import { TitleFilter } from './photo.pipes';
import { PhotoService } from './photo.service';

@NgModule({
    declarations: [ PhotoComponent, TitleFilter, PhotoService ],
    exports: [ PhotoComponent, TitleFilter, PhotoService ]
})
export class PhotoModule { }