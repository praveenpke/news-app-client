import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component'; // Import your component

export const routes: Routes = [
  { path: '', component: NewsListComponent }, // Default route
];
