import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    { path: 'about/:id', component: AboutComponent },
];
