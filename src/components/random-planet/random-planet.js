// Импорт необходимых зависимостей, компонентов и стилей
import React, { useState, useEffect } from 'react';
import './random-planet.css';
import Spinner from '../spinner/spinner';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import PropTypes from 'prop-types';

// Компонент для отображения случайной планеты
const RandomPlanet = ({ swapiService }) => {
	// Состояние для интервала обновления планеты
	const [updateInterval, setUpdateInterval] = useState(3000);

	// Проверка типа пропса
	RandomPlanet.propTypes = {
		updateInterval: PropTypes.number
	}

	// Состояние для хранения информации о планете
	const [planet, setPlanet] = useState({
		name: null,
		population: null,
		rotation: null,
		diameter: null,
		id: null,
		loading: true
	});

	// Функция для установки нового состояния компонента с информацией о планете
	const newPlanet = (planet) => {
		setPlanet(planet);
	};

	// Функция для обновления информации о планете
	const updatePlanet = async () => {
		// Генерация случайного идентификатора планеты от 2 до 18
		const newId = Math.floor(Math.random() * 17) + 2;

		try {
			// Получение информации о новой планете с использованием сервиса SwapiService
			const planetInfo = await swapiService.getPlanet(newId);
			// Вызов функции newPlanet для обновления состояния компонента
			newPlanet(planetInfo);
		} catch (err) {
			// Обработка ошибки при запросе к API
			console.error(err);
		}
	};

	// Эффект, выполняющийся при монтировании и размонтировании компонента
	useEffect(() => {
		// Первоначальная загрузка информации о планете при монтировании компонента
		updatePlanet();

		// Запуск updatePlanet каждые 3 секунды с использованием setInterval
		const intervalId = setInterval(updatePlanet, updateInterval);

		// Очистка интервала при размонтировании компонента
		return () => clearInterval(intervalId);
	}, []); // Пустой массив зависимостей, чтобы эффект выполнился только при монтировании и размонтировании компонента

	// Отображение компонента
	if (planet.loading) {
		return (
			<div className="random-planet jumbotron rounded spiner">
				<Spinner />
			</div>
		)
	}

	// Отображение компонента с информацией о случайной планете
	return (
		<div className="random-planet jumbotron rounded">
			<div className="planet-info">
				<img
					className="planet-image"
					src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
					alt={`Planet ${planet.id}`}
				/>
				<h4 className="title">{planet.name}</h4>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">
					<span className="term">Population: </span>
					<span>{planet.population}</span>
				</li>
				<li className="list-group-item">
					<span className="term">Rotation Period: </span>
					<span>{planet.rotation}</span>
				</li>
				<li className="list-group-item">
					<span className="term">Diameter: </span>
					<span>{planet.diameter}</span>
				</li>
			</ul>
		</div>
	);
};

export default withSwapiService(RandomPlanet);
