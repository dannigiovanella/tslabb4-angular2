import { Component, inject } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})


//Klass för kurslista
export class CourseList {

//Hämtar service
courseService = inject(CourseService);

}
