export default class SwapiService {
	_apiBase = 'https://swapi.dev/api';
	_imageBase = 'https://starwars-visualguide.com/assets/img/'
	async getResourse(url) {
		try {
			const response = await fetch(`${this._apiBase}${url}`);
			if (!response.ok) {
				throw new Error(`Неверный URL-адрес: ${url}, Статус: ${response.status}`);
			}

			const body = await response.json();
			return body;
		} catch (e) {
			console.error(e);
			throw e;
		}
	}

	getAllPeople = async () => {
		try {
			const res = await this.getResourse(`/people/`);
			return res.results.map(this._transformPerson);
		} catch (error) {
			console.error('Error fetching data in getAllPeople:', error);
			throw error;
		}
	};

	getPerson = async (id) => {
		const person = await this.getResourse(`/people/${id}/`);
		return this._transformPerson(person);
	};

	getAllPlanets = async () => {
		const res = await this.getResourse(`/planets/`);
		return res.results.map(this._transformPlanet);
	};

	getPlanet = async (id) => {
		const planet = await this.getResourse(`/planets/${id}`);
		return this._transformPlanet(planet);
	};

	getAllStarships = async () => {
		const res = await this.getResourse(`/starships/`);
		return res.results.map(this._transformStarship);
	};

	getAllStarship = async (id) => {
		const starship = await this.getResourse(`/starships/${id}`);
		return this._transformStarship(starship);
	};

	_extractId = (item) => {
		const idRegExp = /\/([0-9]*)\/$/;
		const match = item.url && item.url.match(idRegExp);
		return match ? match[1] : null;
	};

	getPersonImage = (item) => {
		if (!item || !item.id) {
			return null;
		}
		return `${this._imageBase}characters/${item.id}.jpg`
	};

	getStarshipImage = (item) => {
		if (!item || !item.id) {
			return null;
		}
		return `${this._imageBase}starships/${item.id}.jpg`
	};

	getPlanetImage = ({ id }) => {
		return `${this._imageBase}planets/${id}.jpg`
	};

	_transformPlanet = (planet) => ({
		id: this._extractId(planet),
		name: planet.name,
		population: planet.population,
		rotation: planet.rotation_period,
		diameter: planet.diameter,
		loading: false,
	});

	_transformStarship = (starship) => ({
		id: this._extractId(starship),
		name: starship.name,
		model: starship.model,
		manufacturer: starship.manufacturer,
		cost_in_credits: starship.cost_in_credits,
		length: starship.length,
		crew: starship.crew,
		passengers: starship.passengers,
		cargoCapacity: starship.cargoCapacity,
		loading: false,
	});

	_transformPerson = (person) => {
		if (!person) {
			return null;
		}

		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
			mass: person.mass,
			height: person.height,
			loading: false,
		};
	};
}
