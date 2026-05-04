


import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

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

}


