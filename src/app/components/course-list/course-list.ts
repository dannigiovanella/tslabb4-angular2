import { Component, computed, inject, signal } from '@angular/core';
import { CourseService } from '../../services/course-service';
//Importerar interface för kursdata
import { CourseInterface } from '../../models/course-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})


//Klass för kurslista
export class CourseListComponent {

  //Hämtar service med inject
  courseService = inject(CourseService);

  //Signal för kurslistan. Lagrar datan i array
  courses = signal<CourseInterface[]>([]);

  //Signal för felhantering
  error = signal<string | null>(null);


  //Filtrering
  // Filtering av kurser vid sökning via inputfält

  //Signal för filtererade kurser
  searchTerm = signal("");

  //Computed - Beräknar värdet av signal för filterade kurser. Uppdateras vid sökning eller änding av kursinfo
  filteredCourses = computed(() => {

    //Variabel för att lagra värdet av sökterm
    const filter = this.searchTerm().trim().toLowerCase();

    //Varibel för filtrerade och sorterade kurser
    let processedCourses = this.courses();

    //Filterar kurser om sökfras finns
    if (filter) {

      //Filterar kurser
      processedCourses = processedCourses.filter(course =>

        // Söker kurs med kurskod eller kursnamn
        course.code.toLowerCase().includes(filter) ||
        course.coursename.toLowerCase().includes(filter)
      );
    }


    //Sortering
    // Hämtar valt select-värde från signalen
    const sortValue = this.sortCourses();

    // Sorterar och returnerar kurser i alfabetisk ordning
    return processedCourses.slice().sort((a, b) =>

      //localcomapre jämför textsträngar och sorterar dom i alfabetisk ordning
      a[sortValue].localeCompare(b[sortValue])

    );
  });




  // Sortering på Kurskod, Kursnamn och Progression

  //Signal för vilka fält os kurser sorteras i, med startvärde code
  sortCourses = signal<'code' | 'coursename' | 'progression'>('code');

  //Körs när komponent laddas
  ngOnInit() {
    // subscribe startar observable och kör koden när datan kommer (RxJS docs)
    this.courseService.getCourses().subscribe({

      // Om anropet lyckas
      next: (data) => {

        // Sparar datan i signalen
        // Detta uppdaterar UI automatiskt
        this.courses.set(data);
      },

      // Om nåt går fel vid API anrop
      error: () => {

        // Visar felmeddelande
        this.error.set("Nåt gick fel vid hämtning av kurser");
      }
    });
  }
}
