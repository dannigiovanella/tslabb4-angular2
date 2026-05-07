import { Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list';


export const routes: Routes = [

    //Route för sida med kurslista
    {
        path: "", component: CourseListComponent
    }

];
