import React, { useState, useEffect } from 'react';
import './random-planet.css';
import Spinner from '../spinner/spinner';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import PropTypes from 'prop-types'

const RandomPlanet = ({ swapiService }) => {

	const [updateInterval, setUpdateInterval] = useState(3000);
	RandomPlanet.propTypes = {
		updateInterval: PropTypes.number
	}

	// Состояние компонента, представляющее информацию о текущей планете
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

	// Функция для обновления информации о планете, вызывается каждые 3 секунды

	const updatePlanet = async () => {
		// Генерируем случайный идентификатор планеты от 2 до 18
		const newId = Math.floor(Math.random() * 17) + 2;

		try {
			// Получаем информацию о новой планете с использованием сервиса SwapiService
			const planetInfo = await swapiService.getPlanet(newId);
			// Вызываем функцию newPlanet для обновления состояния компонента
			newPlanet(planetInfo);
		} catch (err) {
			// Обрабатываем ошибку при запросе к API
			console.error(err);
		}
	};

	useEffect(() => {
		// Первоначальная загрузка информации о планете при монтировании компонента
		updatePlanet();

		// Запускаем updatePlanet каждые 3 секунды с использованием setInterval
		const intervalId = setInterval(updatePlanet, updateInterval);

		// Очищаем интервал при размонтировании компонента
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
