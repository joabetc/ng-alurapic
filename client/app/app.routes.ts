import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './registration/resgistration.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
    { path: '', component: ListComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'registration/:id', component: RegistrationComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);