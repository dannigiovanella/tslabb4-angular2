


import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
//Observable - för att kunna returnera asynkron data
import { Observable } from 'rxjs';
//Importerar interface för kursdata
import { CourseInterface } from '../models/course-interface';

@Injectable({
  providedIn: 'root',
})


//Klass för att hantera kursdata
export class CourseService {

  //URL till API
  private url = 'https://webbutveckling.miun.se/files/ramschema.json';

  //Använder inject istället för constructor för att få tillgång till httpclient
  http = inject(HttpClient);


  //Metod för att hämta kurser
  //Hämtar kurser i en array från url och returnerar en observable eftersom datan kommer asynkront
  //Använder interface för data
  getCourses(): Observable<CourseInterface[]> {
    // Gör ett http get-anrop som returnerar resultat som en oservable
    return this.http.get<CourseInterface[]>(this.url);
  }

}


