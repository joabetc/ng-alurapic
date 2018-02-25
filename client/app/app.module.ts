import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { PhotoModule } from './photo/photo.module';
import { PanelModule } from './panel/panel.module';

import { RegistrationComponent } from './registration/resgistration.component';
import { ListComponent } from './list/list.component';

@NgModule({
    imports: [ BrowserModule, PhotoModule, HttpModule, PanelModule ],
    declarations: [ AppComponent, RegistrationComponent, ListComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }