# Labb 4 - Angular II

## Angular Kurslista
Detta projekt är en webbapplikation utvecklad med Angular. Syftet med applikationen är att visa på förståelse för HTTP-anrop, services, Angular Signals samt dynamisk filtrering och sortering av data.

## Länk till webbplats:


## Funktioner:

- Hämtar kursdata från extern JSON-fil via HttpClient
- Visar kursdata i en tabell
- Sortering av kurser efter:

  - Kurskod
  - Kursnamn
  - Progression

- Filtrering/sökning
- Felhantering vid misslyckad datahämtning
- Responsiv design för desktop och mobil


## Signals och reaktivitet
I applikationen används Angular Signals för att hantera dynamisk data och automatiska uppdateringar i gränssnittet:

- signal - används för att lagra kursdata, sökfras och sorteringsvalen
- computed - används för att filtrera och sortera kurslistan
- Data binding - används för att uppdatera gränssnittet utan att sida laddas om


## HTTP och Services
Applikationen använder:

- HttpClient - för att hämta kursdata från JSON-fil
- Service - för att separera logik för datahämtning från komponenter
- Observable och subscribe - för att hantera asynkron datahämtning


## Struktur
Applikationen är utformad på en sida och är uppbyggd med komponenterna:

- CourseList (visning av kurser)
- CourseService (hämtning av kursdata)
- CourseInterface (modell/interface för kursdata)
- App (huvudkomponent)