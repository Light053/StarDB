import React, { useState } from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page'
import './app.css';
import PlanetPage from '../planet-page/planet-page';
import StarshipPage from '../starships-page/starship-page';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import SwapiService from '../../services/swapi-services';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StarshipDetails from '../starship-details/starship-details'
import PeopleDetails from '../people-details/people-details';
import PlanetsDetails from '../planets-details/planets-details';
import NotFound from '../not-found/not-found';

const App = () => {
	const swapi = new SwapiService();
	return (
		<SwapiServiceProvider value={swapi}>
			<Router>
				<div className='app'>
					<Header />
					<RandomPlanet />
					<Routes>
						<Route path='/' element={<h1 className='welcome'>Welcome to Star DB</h1>} />
						<Route path='/people/:id?' element={<PeoplePage />} />
						<Route path='/people/:id' element={<PeopleDetails />} />

						<Route path='/planets/:id?' element={<PlanetPage />} />
						<Route path='/planets/:id' element={<PlanetsDetails />} />

						<Route path='/starships/:id?' element={<StarshipPage />} />
						<Route path='/starships/:id' element={<StarshipDetails />} />

						<Route path='/*' element={<NotFound />} />
					</Routes>

				</div>
			</Router>
		</SwapiServiceProvider>
	);
};



export default App;
