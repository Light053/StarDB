// Импорты React и компонентов
import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page';
import './app.css';
import PlanetPage from '../planet-page/planet-page';
import StarshipPage from '../starships-page/starship-page';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import SwapiService from '../../services/swapi-services';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StarshipDetails from '../starship-details/starship-details';
import PeopleDetails from '../people-details/people-details';
import PlanetsDetails from '../planets-details/planets-details';
import NotFound from '../not-found/not-found';

const App = () => {
	// Создание экземпляра сервиса SwapiService
	const swapi = new SwapiService();

	return (
		// Поставщик контекста для сервиса Swapi
		<SwapiServiceProvider value={swapi}>
			{/* Роутер для навигации между страницами */}
			<Router>
				{/* Общий контейнер для приложения */}
				<div className='app'>
					{/* Шапка приложения */}
					<Header />
					{/* Случайная планета на главной странице */}
					<RandomPlanet />
					{/* Определение маршрутов с использованием React Router */}
					<Routes>
						{/* Главная страница */}
						<Route path='/' element={<h1 className='welcome'>Welcome to Star DB</h1>} />
						{/* Страница с персонажами, параметр :id является опциональным */}
						<Route path='/people/:id?' element={<PeoplePage />} />
						{/* Страница с деталями персонажа по конкретному :id */}
						<Route path='/people/:id' element={<PeopleDetails />} />
						{/* Аналогичные маршруты для планет и звездолетов */}
						<Route path='/planets/:id?' element={<PlanetPage />} />
						<Route path='/planets/:id' element={<PlanetsDetails />} />
						<Route path='/starships/:id?' element={<StarshipPage />} />
						<Route path='/starships/:id' element={<StarshipDetails />} />
						{/* Маршрут для обработки неизвестных страниц */}
						<Route path='/*' element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		</SwapiServiceProvider>
	);
};

// Экспорт компонента App
export default App;
