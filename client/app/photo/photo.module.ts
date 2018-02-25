import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo.component';
import { TitleFilter } from './photo.pipes';

@NgModule({
    declarations: [ PhotoComponent, TitleFilter ],
    exports: [ PhotoComponent, TitleFilter ]
})
export class PhotoModule { }