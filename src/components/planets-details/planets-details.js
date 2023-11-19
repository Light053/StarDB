// Импорт необходимых компонентов и зависимостей
import ItemDetails from '../item-details/item-details';
import { useParams } from 'react-router-dom';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import { planetInfo } from '../item-details/item-info';

// Функциональный компонент для отображения подробностей о планете
const PlanetsDetails = ({ swapiService }) => {
	// Получение параметра из URL с использованием хука useParams
	const { id } = useParams();

	// Возвращаем компонент с подробностями о планете
	return <ItemDetails
		itemId={id}
		getData={swapiService.getPlanet}
		getImageUrl={swapiService.getPlanetImage}
		properties={planetInfo}
	/>;
}

export default withSwapiService(PlanetsDetails);
