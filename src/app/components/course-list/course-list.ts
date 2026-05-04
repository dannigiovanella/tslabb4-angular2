import { Component, inject, signal } from '@angular/core';
import { CourseService } from '../../services/course';
//Importerar interface för kursdata
import { CourseInterface } from '../../models/course-interface';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})


//Klass för kurslista
export class CourseListComponenet {

  //Hämtar service med inject
  courseService = inject(CourseService);

  //Signal för kurslistan. Lagrar datan i array
  courses = signal<CourseInterface[]>([]);

  //Körs när komponent laddas
  ngOnInit() {
    // subscribe startar observable och kör koden när datan kommer (RxJS docs)
    this.courseService.getCourses().subscribe(data => {
      //Uppdaterar signalen med kursdata
      this.courses.set(data);
    });
  }

}
