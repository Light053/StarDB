Project Description:

"Star DB" is a web application developed using React.js and React Router, providing information about characters, planets, and starships from the "Star Wars" universe using data from the [Swapi API](https://swapi.dev/).

Key Features:

- React and React Router: The project is entirely based on the React library and utilizes React Router for organizing navigation between pages.

- SwapiService Context: The `SwapiServiceProvider` context is used to provide the SwapiService (interface to the Swapi API) to all components of the application.

- Routing with React Router: All navigation in the application is implemented using React Router. Pages for characters, planets, starships, and detailed information have corresponding routes.

- Page Components: Separate components have been developed to display the list of characters (`PeoplePage`), character details (`PeopleDetails`), a page with a list of planets (`PlanetPage`), planet details (`PlanetsDetails`), a page with a list of starships (`StarshipPage`), and starship details (`StarshipDetails`).

- 404 Page (NotFound): A page has been implemented to handle cases where the route does not match any of the predefined routes.
